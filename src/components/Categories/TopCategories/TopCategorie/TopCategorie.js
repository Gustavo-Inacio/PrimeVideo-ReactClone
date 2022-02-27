import React from 'react';
import categorieBackground from '../../../../assets/img/movies-background.png';
import { Link } from 'react-router-dom';
import classes from './TopCategorie.module.css';

const topCategorieStyles = {
    background: `url(${categorieBackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

function TopCategorie({children, to}) {
  return (
    <Link to={to} className={classes.topCategorieContainer}>
        <div className={classes.topCatDiv} >
            <img src={categorieBackground}/>
            <p>{children}</p>
        </div>
    </Link>
  );
}

export default TopCategorie;
