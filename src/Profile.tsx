import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchCurrentUser } from './service';

interface ProfileProps {
    
}

export function Profile(props: ProfileProps) {
  const [user, setUser] = useState<User>();
  useEffect(function(){
    fetchCurrentUser().then(function(user){
      setUser(user);
    });
  }, []);

  if (!user) {
    return <>Loading...</>
  }

  return (
    <div>
      {user.vorname} {user.nachname}
    </div>
  );
};