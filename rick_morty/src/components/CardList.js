import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const CardList = () => {

    const [characters , setCharacters] = useState([])
    

    useEffect(() => {
       axios.get("https://rickandmortyapi.com/api/character")
       .then(res => {
        setCharacters(res.data.results)
       })
    }, [])

    return (
        <div className='container'>
        {characters.map((character) => {
            return <Card key={character.id} id={character.id} image={character.image} name={character.name} location={character.location.name} status={character.status} />
        })}
        </div>
    );



}

export default CardList
