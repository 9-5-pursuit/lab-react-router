import React from 'react'
import { Pet, iconMap } from './Pet';


function Pets({ pets }) {


  return (
    <div>
      {pets.map((pet) => (
        <Pet key={pet.id} kind={pet.kind} pet={pet} icon={iconMap[pet.kind]} />
      ))}
    </div>
  );
}

export default Pets