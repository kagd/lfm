import React, { useContext, useEffect, useState } from 'react';
import { fetchRegistrations, fetchSeasonEvent, register as raceRegister, withdraw } from '../service';
import { CarsContext } from './CarsContext';
import { RegistrationsContext } from './RegistrationsContext';
import { SeriesEvent } from './SeriesEvent';
import './styles.css';

interface SeriesProps {
  seriesIndex: number;
}

export function Series({seriesIndex}: SeriesProps) {
  const [event, setEvent] = useState<SeasonEvent>();
  const [registrations, setRegistrations] = useState<Registration[]>();
  const cars = useContext(CarsContext);
  useEffect(function(){
    fetchSeasonEvent(seriesIndex).then(function(_e){
      const _event = _e[0].events[seriesIndex];
      setEvent(_event);
    });
  }, [seriesIndex]);

  useEffect(function(){
    if(!event){
      return;
    }
    const raceIds = event.upcoming.map(event => event.race_id);
    fetchRegistrations(raceIds).then(function(regs){
      setRegistrations(regs);
    })
  }, [event]);

  async function register(raceId: number, carId: number){
    await raceRegister(raceId, carId);
    const regs = registrations?.reduce(function(memo, reg){
      const r = {...reg};
      if(reg.race_id === raceId){
        r.signedUp.success = true;
        r.success = true;
        r.car_model = carId;
      }
      memo.push(r);
      return memo;
    }, [] as Registration[]);
    setRegistrations(regs);
  }

  async function unregister(raceId: number){
    await withdraw(raceId);
    const regs = registrations?.reduce(function(memo, reg){
      const r = {...reg};
      if(reg.race_id === raceId){
        r.signedUp.success = false;
        r.success = false;
      }
      memo.push(r);
      return memo;
    }, [] as Registration[]);
    setRegistrations(regs);
  }

  function getRegistration(raceId: number){
    return registrations?.find(reg => reg.race_id === raceId && reg.signedUp.success) || null;
  }

  if (!event || !registrations) {
    return <div>Loading Series...</div>
  }
  const seriesCarClasses = event.settings.championship_settings.car_classes.map(carClass => carClass.class);
  const carModels = cars.filter( car => seriesCarClasses.find( c => c === car.class))

  return (
    <div className="series">
      <RegistrationsContext.Provider value={{register, unregister, getRegistration}}>
        <h2>{event.event_name}</h2>
        <h3>{event.upcoming[0].track.track_name}</h3>
        {event.upcoming.map(race => <SeriesEvent key={race.race_id} event={race} carModels={carModels} />)}
      </RegistrationsContext.Provider>
    </div>
  );
};