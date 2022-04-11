import React from 'react';
import GenreItem from '../GenreItem/GenreItem';
import classes from './GenresList.module.css'

function GenresList({col, genres, ...props}) {
  return (
    <ul className={classes.genresList} style={{columnCount : col || 1}}>
        {genres.map((elem) => (
            <li key={`${elem.name}${elem.id}`} ><GenreItem to={`/${elem.id}`}>{elem.name}</GenreItem></li>
        ))}
    </ul>  
  );
}

export default GenresList;
