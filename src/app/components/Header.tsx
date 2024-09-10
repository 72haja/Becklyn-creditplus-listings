import { Dropdown } from "@/app/components/ds/Dropdown";
import { useState } from "react";

export const Header = () => {

  const allWorkTypes = [
    { label: 'Frontend', value: 'frontend' },
    { label: 'Backend', value: 'backend' },
    { label: 'Fullstack', value: 'fullstack' },
    { label: 'DevOps', value: 'devops' },
  ]
  const [workType, setWorkType] = useState('');

  const allLocations = [
    { label: 'Berlin', value: 'berlin' },
    { label: 'Bremen', value: 'bremen' },
    { label: 'Hamburg', value: 'hamburg' },
    { label: 'München', value: 'münchen' },
  ]
  const [location, setLocation] = useState('');

  const allExperienceLevels = [
    { label: 'Junior', value: 'junior' },
    { label: 'Mid', value: 'mid' },
    { label: 'Senior', value: 'senior' },
    { label: 'Lead', value: 'lead' },
  ]
  const [experienceLevel, setExperienceLevel] = useState('');


  return (
    <div className="bg-gray-75 lg:px-[256px] lg:pt-[100px] lg:pb-[60px] grid grid-cols-1">
      <span className="unnamed-character-style-8 text-primary text-center">56 offene Stellen bei Creditplus</span>
      <span className="pt-[18px] unnamed-character-style-2 leading-[68px] font-bold text-secondary text-center">Hier beginnt deine Zukunft</span>
      <div className="grid grid-cols-3 gap-6 mt-[30px]">
        <Dropdown
          placeholder='Wähle einen Bereich'
          items={allWorkTypes}
          value={workType}
          onChange={setWorkType}
        />
        <Dropdown
          placeholder='Wähle eine Stadt'
          items={allLocations}
          value={location}
          onChange={setLocation}
        />
        <Dropdown
          placeholder='Wähle ein Erfahrungslevel'
          items={allExperienceLevels}
          value={experienceLevel}
          onChange={setExperienceLevel}
        />
      </div>
    </div>
  );
}
