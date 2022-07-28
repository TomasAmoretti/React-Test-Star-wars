import React from 'react';
import classes from './Character.module.css';

const Character = ({name, updateSelected, index}) => {

  return (
    <li>
        <button onClick={()=>{updateSelected(index)}} className={classes.character}>{name}</button>
    </li>
  );
};

export default Character;