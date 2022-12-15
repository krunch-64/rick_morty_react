import React, { useEffect, useState } from 'react';
import Card from './Card';
import NavPage from './NavPage';

const CardList = () => {


    const [characters , setCharacters] = useState([])
    const [page , setPage] = useState(1)



    useEffect(() => {
        async function fetchData() {
            const data = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const { results } = await data.json();
            setCharacters(results)
        
        }
        fetchData();
    }, [page])




    return (
        <div>
            <NavPage page={page} setPage={setPage} />
            <main className='container'>
                {characters.map((character) => {
                    return <Card key={character.id} id={character.id} image={character.image} name={character.name} location={character.location.name} status={character.status} />
                })}
            </main>   
            <NavPage page={page} setPage={setPage}/>
        </div>
        
    );
}

export default CardList
