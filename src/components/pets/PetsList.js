import { useLocation } from "react-router-dom";

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


const { pathname } = useLocation();
const pathNameArray = pathname.split("/");
let url = pathNameArray.pop();

let petData = null;

if(url === "cats"){
  petData = (
  <section>
    {cats.map((cat) => (
      <Pet key={cat.id} kind="cat" pet={cat} />
    ))}
  </section>
  )
}
else if(url === "dogs"){
  petData = (
  <section>
    {dogs.map((dog) => (
      <Pet key={dog.id} kind="dog" pet={dog} />
    ))}
  </section>
  )
}
else if(url === "pets"){
  petData = (
    <>
      {cats.map((cat) => (
      <Pet key={cat.id} kind="cat" pet={cat} />
      ))}

      {dogs.map((dog) => (
      <Pet key={dog.id} kind="dog" pet={dog} />
      ))} 
    </>
  )
}


  return (
    <section className="pets-wrapper">
      <PetsListNav cats={cats} dogs={dogs} />
      <section className="pets-list">
        {petData}
      </section>
    </section>
  );
};

export default PetsList;
