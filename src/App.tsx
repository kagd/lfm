import React, { useEffect } from 'react';
import './App.css';
import {HashRouter, Link, Routes, Route} from 'react-router-dom';
import { Races } from './races/Races';
import { Profile } from './Profile';

export function App() {

  return (
    <div>
      <HashRouter>
        <header>
          <nav>
            <ul>
              <li>
                <Link to='/'>Races</Link>
              </li>
              <li>
                <Link to='/profile'>Profile</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route index={true} element={<Races />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </HashRouter>
    </div>
  );
}
