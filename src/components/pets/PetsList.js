import PetsListNav from "./PetsListNav";
import Pet from "./Pet";
import "./PetsList.css";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";

export const PetsList = ({ pets }) => {
  const { pathname } = useLocation();
  //const { navigate } = useNavigate();
  //console.log(pathname);

  const [cats, dogs] = pets.reduce(
    (acc, pet) => {
      const position = pet.kind === "Cat" ? 0 : 1;
      acc[position].push(pet);
      return acc;
    },
    [[], []]
  );

  function handleUrl(pathName) {
    if (pathName === "/pets/cats") {
      return (
        <>
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}
        </>
      );
    } else if (pathName === "/pets/dogs") {
      return (
        <>
          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
        </>
      );
    } else if (pathName === "/pets") {
      return (
        <>
          <Navigate to="/pets/cats" />
        </>
      );
    } else {
      return (
        <>
          {cats.map((cat) => (
            <Pet key={cat.id} kind="cat" pet={cat} />
          ))}

          {dogs.map((dog) => (
            <Pet key={dog.id} kind="dog" pet={dog} />
          ))}
        </>
      );
    }
  }

  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">{handleUrl(pathname)}</section>
    </section>
  );
};

export default PetsList;
