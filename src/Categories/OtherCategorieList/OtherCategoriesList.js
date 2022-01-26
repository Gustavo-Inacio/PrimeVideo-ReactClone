import React from 'react';
import GenreItem from '../GenreItem/GenreItem';
import classes from './OtherCategoriesList.module.css';

function OtherCategoriesList() {
  return (
      <ul className={classes.otherList}>
        <li><GenreItem to={'/'}>Recently added movies</GenreItem></li>
        <li><GenreItem to={'/'}>Recently added movies</GenreItem></li>
        <li><GenreItem to={'/'}>Recently added movies</GenreItem></li>
        <li><GenreItem to={'/'}>Recently added movies</GenreItem></li>
        <li><GenreItem to={'/'}>Recently added movies</GenreItem></li>
        <li><GenreItem to={'/'}>Recently added movies</GenreItem></li>
      </ul>
  );
}

export default OtherCategoriesList;
