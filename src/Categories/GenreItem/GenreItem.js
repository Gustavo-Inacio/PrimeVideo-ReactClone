import React from 'react';
import { Link } from 'react-router-dom';
import classes from './GenreItem.module.css'

function GenreItem({children, to}) {
  return (
      <Link to={to} className={classes.genreLink}>{children}</Link>
  );
}

export default GenreItem;
