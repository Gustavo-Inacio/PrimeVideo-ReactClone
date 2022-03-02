import React, { useEffect, useState } from 'react';
import { storedGenres } from '../../utilities/genresList';
import classes from './Categories.module.css';
import GenresList from './GenresList/GenresList';
import OtherCategoriesList from './OtherCategorieList/OtherCategoriesList';
import TopCategories from './TopCategories/TopCategories';

function Categories() {

  const [basicGenres, setBasicGenres] = useState(null);

  useEffect(async () => {
    const genres = await storedGenres();
    console.log(genres)
    setBasicGenres(genres.genres)
  }, [])

  return (
      <div className={classes.categoriesContainer}>
          <div className={classes.col} >
            <TopCategories ></TopCategories>
          </div>

          <div className={[classes.col, classes.genresSide].join(' ')}>
              {basicGenres &&
                <div>
                  <h1 className={classes.genresTitle}>Genres</h1>
                  <GenresList col={2} genres={basicGenres}></GenresList>
                </div>
              }
            
              <div >
                <h1 className={classes.genresTitle}>Other Categories</h1>
                <OtherCategoriesList></OtherCategoriesList>
              </div>
            

            
          </div>
      </div>
      

  );
}

export default Categories;
