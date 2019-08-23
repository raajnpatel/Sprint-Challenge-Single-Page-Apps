import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from "./SearchForm";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  //characters will be stored in an array
  const[characters, setCharacters]=useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get(`https://rickandmortyapi.com/api/character/?name=`)
        .then(response => {setCharacters(response.data.results)})
        .catch(error => console.log('Unexpected Error: ',error))
  }, []);


  return(
      <div>
        <section className='character-list grid-view'>
          {characters.map((character,index) => <CharacterCard key={index} character={character}/>)}
        </section>
      </div>
  )
}