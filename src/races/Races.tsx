import React, { useEffect, useState } from 'react';
import { fetchCars, fetchSeasonEvent } from '../service';
import { CarsContext } from './CarsContext';
import { Series } from './Series';

interface RacesProps {
    
}

export function Races(props: RacesProps) {
  const [season, setSeason] = useState<Season>();
  const [cars, setCars] = useState<Car[]>();
  useEffect(function(){
    fetchSeasonEvent(0).then(function(seasons){
      setSeason(seasons[0]);
    });
    fetchCars().then(function(c){
      setCars(c);
    });
  }, []);

  if(!season || !cars){
    return <div>Loading...</div>
  }

  return (
    <div className="races">
      <CarsContext.Provider value={cars}>
        {season.events.map((event, idx) => <Series key={event.event_name} seriesIndex={idx} />)}
      </CarsContext.Provider>
    </div>
  );
};