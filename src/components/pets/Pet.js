import "./Pet.css";
import { Routes, Route, Navigate } from "react-router-dom";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  const icon = iconMap[kind];
  return (
    <article key={pet.id}>
      <Routes>
        <Route path="/" element={<Navigate to="cats" />} />
      </Routes>
      <h3>
        {icon} {pet.name}
      </h3>
    </article>
  );
};

export default Pet;
