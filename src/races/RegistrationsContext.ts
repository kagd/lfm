import React from 'react';

type Register = (raceId: number, carId: number) => Promise<void>;
type Unregister = (raceId: number) => Promise<void>;

const RegistrationsContext = React.createContext<{register: Register, unregister: Unregister, getRegistration: (raceId: number) => Registration | null}>(null as any);

export {RegistrationsContext};