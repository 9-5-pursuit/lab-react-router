import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useParams } from "react-router-dom";

export const PetsList = ({ pets }) => {
  let { p } = useParams()
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
        <PetsListNav cats={cats} dogs={dogs} />


        <section className="pets-list">
          {/* All cats section */}

              {p==='cats' && cats.map((cat) => (
                <Pet key={cat.id} kind="cat" pet={cat} />
              ))}

              {p==='dogs' && dogs.map((dog) => (
                <Pet key={dog.id} kind="dog" pet={dog} />
              ))}


          {/* All dogs section */}
        </section>
    </section>

  );
};

export default PetsList;
