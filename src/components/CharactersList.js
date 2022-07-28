import React, { useState, useEffect } from 'react';
import classes from './CharactersList.module.css'
import Character from './Character';
import getCharacters from '../services/getCharacters';
import CharacterModal from './UI/CharacterModal';

export default function CharacterList() {

  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const updateSelectedCharacter = (index)  => {
    setSelectedCharacter(characters[index])
  }

  useEffect(() => {
    getCharacters().then(characters => {
      setCharacters(characters)
    });
  }, [])

  return (
      <React.Fragment>
      {characters.length === 0 && <p>No characters found</p>}
      {selectedCharacter && <CharacterModal character={selectedCharacter} onConfirm={()=>{setSelectedCharacter(null)}} />}
      <ul className={classes['characters-list']}>
        {characters.map((person, index) =>
          <Character
            index={index}
            key={person.url}
            name={person.name}
            updateSelected={updateSelectedCharacter}
          />
        )}
      </ul>
      </React.Fragment>
  )
}