import React from 'react'

const Card = ({key,image,name,location}) => {
  return (
    <div key={key}>
      <img src={image} />
      <h3>{name}</h3>
      <p>{location}</p>
    </div>
  )
}

export default Card
