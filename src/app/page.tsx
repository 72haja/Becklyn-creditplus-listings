"use client"; // This is a client component 👈🏽

import { Provider } from 'urql';

import client from './services/client';

import { Header } from "./components/Header";
import { Body } from "./components/Body";
import { useState } from 'react';

export default function Home() {

  const [workType, setWorkType] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [experienceLevel, setExperienceLevel] = useState<string>('');

  return (
    <Provider value={client}>
      <div className="grid">
        <Header
          workType={workType}
          location={location}
          experienceLevel={experienceLevel}
          onWorkTypeChange={setWorkType}
          onLocationChange={setLocation}
          onExperienceLevelChange={setExperienceLevel}
        />
        <Body
          workType={workType}
          location={location}
          experienceLevel={experienceLevel}
        />
      </div>
    </Provider>
  );
}
