import React from 'react';
import TopCategorie from './TopCategorie/TopCategorie';
import classes from './TopCategories.module.css'

function TopCategories() {
  return (
    <div className={classes.topCategorieContainer}>
        <h1 className={classes.sectionTitle}>Top Categories</h1>
        <div className={classes.topCategorieList}>
            <TopCategorie to={'/abacaxi'}>Included with Prime</TopCategorie>
            <TopCategorie to={'/abacaxi'}>Amazon Originals and Exclusives</TopCategorie>
            <TopCategorie to={'/abacaxi'}>Movies</TopCategorie>
            <TopCategorie to={'/abacaxi'}>TV</TopCategorie>
            <TopCategorie to={'/abacaxi'}>Kids</TopCategorie>
        </div>
    </div>
  );
}

export default TopCategories;
