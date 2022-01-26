import React from 'react';
import GenreItem from '../GenreItem/GenreItem';
import classes from './GenresList.module.css'

function GenresList({col}) {
  return (
    <ul className={classes.genresList} style={{columnCount : col || 1}}>
        <li><GenreItem to={'/'}>Action and Advanture</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
        <li><GenreItem to={'/'}>Lorem ipsum</GenreItem></li>
     
    </ul>  
  );
}

export default GenresList;
