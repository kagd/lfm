import React from 'react';

interface PastEventProps {
  event: PastEvent;
  userId: number;
  rating: number;
  safteyRating: number;
}

export function PastEvent(props: PastEventProps) {
  const dateParts = props.event.race_date.split(' ');
  const date = new Date(dateParts[0] + 'T' + dateParts[1] + '+01:00');
  const sofProperty = props.event.split === 1 ? 'sof' : `split${props.event.split}_sof`;
  const sof: number = (props.event as LooksLikeObject)[sofProperty];
  return (
    <tr>
      <td>{date.toLocaleDateString()} {date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}</td>
      <td>{props.event.event_name}</td>
      <td>{props.event.car_name}</td>
      <td>{props.event.track_name}</td>
      <td>{props.event.split}</td>
      <td>{props.event.start_pos}</td>
      <td>{props.event.finishing_pos}</td>
      <td>{sof}</td>
      <td>{props.event.rating_change} <em>({props.rating})</em></td>
      <td>{props.event.incidents}</td>
      <td>{props.event.sr_change} <em>({props.safteyRating})</em></td>
      <td>{props.event.points}</td>
    </tr>
  );
};