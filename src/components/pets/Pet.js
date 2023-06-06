import "./Pet.css";

const iconMap = {
  cat: "🐈",
  dog: "🐕",
};

export const Pet = ({ kind, pet }) => {
  // console.log(kind);
  // console.log(pet);
  const icon = iconMap[kind];
  return (
    <article key={pet?.id}>
      <h3>
        {icon} {pet?.name}
      </h3>
    </article>
  );
};

export default Pet;
