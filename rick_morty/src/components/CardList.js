import React, { useState } from 'react';
import Card from './Card';

const CardList = () => {


    fetch("https://rickandmortyapi.com/api/character")
    .then((response) => {
        if(response.ok) {
            return response.json()
        }
    }).then(data => {
        // info donne les liens pour la page next et prev
        //console.log(data['info'])
        data['results'].map(result => {
            let result_key = result.id
            let result_name = result.name
            let result_location = result.location.name
            let result_image = result.image
           return  <Card key={result_key} image={result_image} name={result_name} location={result_location} />
        })
    })
    

    
}

export default CardList
