import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import { useParams } from "react-router-dom";
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

  const { id } = useParams();

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {/* All cats section */}
        {id === "cats" &&
          cats.map((cat) => <Pet key={cat.id} kind="cat" pet={cat} />)}

        {/* All dogs section */}
        {id === "dogs" &&
          dogs.map((dog) => <Pet key={dog.id} kind="dog" pet={dog} />)}
      </section>
    </section>
  );
};

export default PetsList;
