import React, { useEffect, useState } from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import '../styles/single.scss'
import Episodes from "../components/Episodes";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Single = () => {

  const {id} = useParams();
  const [episodes , setEpisodes] = useState([]);
  const [image , setImage] = useState();
  const [name , setName] = useState('');
  const [location , setLocation] = useState('');
  const [description , setDescription] =useState('');

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
   .then(res => {
    setEpisodes(res.data.episode)
    setImage(res.data.image)
    setName(res.data.name)
    setLocation(res.data.location.name)
    setDescription(res.data.name+' est un spécimen '+res.data.species+' de type '+(res.data.gender).toLowerCase()+'.')
  })
  }, [])


  return (
    <div>
      <Header/>
        <div className="container-details">
        <img src={image} className="img-details"/>
        <div>
          <h2>{name}</h2>
          <p>{location}</p>
          <p>{description}</p>
          <hr/>
          <h3>Épisodes : </h3>
          <ul>
            {episodes.map((episode) => {
              return <Episodes episode={episode} />
            })}
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
   
  )

}
export default Single
