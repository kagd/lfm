import React, { useContext, useEffect, useState } from 'react';
import * as timeago from 'timeago.js';
import { Register } from './Register';
import { RegistrationsContext } from './RegistrationsContext';

interface SeriesEventProps {
  event: RaceEvent;
  carModels: Car[];
}

export function SeriesEvent({event, carModels}: SeriesEventProps) {
  const dateParts = event.race_date.split(' ');
  const date = new Date(dateParts[0] + 'T' + dateParts[1] + '+01:00');
  const [ago, setAgo] = useState<string>();
  const {getRegistration} = useContext(RegistrationsContext);

  useEffect(() => {
    function execAgo(){
      const delta = timeago.format(date); 
      setAgo(delta);
    };
    execAgo();
    const interval = setInterval(execAgo, 1000);
    return () => clearInterval(interval);
  }, []);

  const registration = getRegistration(event.race_id);
  const classes = ['series-event'];
  if(registration){
    classes.push('registered');
  }
  
  return (
    <div className={classes.join(' ')}>
      <ul>
        <li>
          #{event.race_id} {date.toLocaleDateString()} {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
          <span className="time-ago">({ago})</span>
        </li>
        <li>
          <Register raceId={event.race_id} carModels={carModels} registered={event.registered} />
        </li>
      </ul>
    </div>
  );
};