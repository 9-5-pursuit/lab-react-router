import React from "react";
import "./Pet.css";
import PetsList from "./PetsList";
import PetsListNav from "./PetsListNav";

export const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind];
  return (
    <article key={pet.id}>
      <h3>
        {icon} {pet.name}
      </h3>
    </article>
  );
};

export default Pet;
