import React from 'react'
import Pet from './Pet'

function CatsDogs({ cats, dogs }) {
  return (
    <div>
    {cats.map((cat) => (
      <Pet key={cat.id} kind="cat" pet={cat} />
    ))}

    {dogs.map((dog) => (
      <Pet key={dog.id} kind="dog" pet={dog} />
    ))}
    </div>
  )
}

export default CatsDogs