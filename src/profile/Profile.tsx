import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCurrentUser, fetchPastRaces } from '../service';
import { PastEvent } from './PastEvent';
import './styles.css';

interface ProfileProps {}

export function Profile(props: ProfileProps) {
  const [user, setUser] = useState<User>();
  const [pastEvents, setPastEvents] = useState<PastEvent[]>();
  useEffect(function(){
    fetchCurrentUser().then(function(user){
      setUser(user);
    });
    fetchPastRaces().then(function(pastEvents){
      setPastEvents(pastEvents);
    });
  }, []);

  if (!user || !pastEvents) {
    return <>Loading...</>
  }

  function renderEvent(user: User, events: PastEvent[]){
    const combined = events.reduce(function(memo, event){
      const components = [...memo.components];
      components.push(<PastEvent event={event} userId={user.id} rating={memo.rating} safteyRating={memo.sr} />);
      return {
        rating: memo.rating - event.rating_change,
        sr: parseFloat((memo.sr - event.sr_change).toFixed(2)),
        components,
      };
    }, {rating: parseFloat(user.cc_rating), sr: user.safety_rating, components: []} as {rating: number, sr: number, components: JSX.Element[]});

    return combined.components;
  }

  return (
    <div>
      <h2>{user.vorname} {user.nachname}</h2>
      <h3>{user.cc_rating} / SR {user.safety_rating}</h3>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Series</th>
            <th>Car</th>
            <th>Track</th>
            <th>Split</th>
            <th>Start</th>
            <th>Finish</th>
            <th>SoF</th>
            <th>Rating +/-</th>
            <th>Inc</th>
            <th>SR +/-</th>
            <th>Pts</th>
          </tr>
        </thead>
        <tbody>
          {renderEvent(user, pastEvents)}
        </tbody>
      </table>
    </div>
  );
};