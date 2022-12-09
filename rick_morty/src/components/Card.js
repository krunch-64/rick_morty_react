import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faCross ,faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.image} className="card-img-top"/>
      <h3>{props.status == "Dead" ? <FontAwesomeIcon icon={faCross} /> : ""} {props.name}</h3>
      <p className='card-location'>{<FontAwesomeIcon icon={faLocationDot}/>} Location : {props.location}</p>
      <div className='text-end'>
      <NavLink to={`/details/${props.id}`}>
        <button className='card-btn'>Détails {<FontAwesomeIcon icon={faCircleArrowRight}/>}</button>
      </NavLink>
      </div>
    </div>
  )
}

export default Card
