import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);

      return acc;
    },
    [[], []]
  );

  const { kind } = useParams();
  console.log(!kind);
  console.log(kind);

  // console.log(cats);
  // console.log(dogs);

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      {!kind ? (
        <section className="pets-list">
          {/* All cats section */}
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}

          {/* All dogs section */}
          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
        </section>
      ) : kind === "cats" ? (
        <section className="pets-list">
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}
        </section>
      ) : kind === "dogs" ? (
        <section className="pets-list">
          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
        </section>
      ) : null}
    </section>
  );
};

export default PetsList;
