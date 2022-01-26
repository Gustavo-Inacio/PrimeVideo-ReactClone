import React from 'react';
import classes from './Categories.module.css';
import GenresList from './GenresList/GenresList';
import OtherCategoriesList from './OtherCategorieList/OtherCategoriesList';
import TopCategories from './TopCategories/TopCategories';

function Categories() {
  return (
      <div className={classes.categoriesContainer}>
          <div className={classes.col} >
            <TopCategories ></TopCategories>
          </div>

          <div className={[classes.col, classes.genresSide].join(' ')}>
              <div >
                <h1 className={classes.genresTitle}>Genres</h1>
                <GenresList col={2}></GenresList>
              </div>
            
              <div >
                <h1 className={classes.genresTitle}>Other Categories</h1>
                <OtherCategoriesList></OtherCategoriesList>
              </div>
            

            
          </div>
      </div>
      

  );
}

export default Categories;
