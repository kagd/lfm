import React, { useContext, useState } from 'react';
import { RegistrationsContext } from './RegistrationsContext';

interface RegisterProps {
  raceId: number;
  carModels: Car[];
  registered: number;
}

export function Register(props: RegisterProps) {
  const [carId, setCarId] = useState(props.carModels[0].car_id);
  const [isWaiting, setIsWaiting] = useState(false);
  const {register, unregister, getRegistration} = useContext(RegistrationsContext);
  async function onSubmit(e: React.FormEvent){
    e.preventDefault();
    setIsWaiting(true);
    await register(props.raceId, carId);
    setIsWaiting(false);
  }

  async function withdraw(){
    setIsWaiting(true);
    await unregister(props.raceId);
    setIsWaiting(false);
  }

  function onChange(e: React.ChangeEvent<HTMLSelectElement>){
    setCarId(parseInt(e.target.value));
  }

  if(isWaiting){
    return <div>Processing...</div>
  }
  const registration = getRegistration(props.raceId);
  // note: registered doesn't mean the driver is registerd...
  if(registration){
    return (
      <>{registration.signedUp.car} <button type="button" onClick={withdraw}>Withdraw</button></>
    )
  }

  return (
    <form action="./" onSubmit={onSubmit}>
      <select name="carModel" id="carModel" onChange={onChange}>
        {props.carModels.map(carModel => <option key={carModel.car_id} value={carModel.car_id}>{carModel.car_name} ({carModel.class})</option>)}
      </select>
      <button type="submit">Register</button>
    </form>
  );
};