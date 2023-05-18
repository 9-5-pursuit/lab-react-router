// import { useLocation } from "react-router-dom";
import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  return (
    <section className="pets-wrapper">
      {/* Using Pet component with key, kind, and pet props for dogs*/}
      <PetsListNav cats={cats} dogs={dogs} />
      {dogs.map((dog) => (
        <Pet key={dog.id} kind="dog" pet={dog} />
      ))}
      {/* Using Pet component with key, kind, and pet props for cats */}
      {cats.map((cat) => (
        <Pet key={cat.id} kind="cat" pet={cat} />
      ))}
    </section>
  );
};

export default PetsList;
