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
          {pastEvents.map(event => <PastEvent event={event} userId={user.id} />)}
        </tbody>
      </table>
    </div>
  );
};