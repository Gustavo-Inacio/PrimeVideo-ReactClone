import React, { useEffect } from 'react'
import "swiper/css/navigation";

import classes from './SimpleMovieList.module.scss';
import '../movieListSwiper.scss';
import SimpleMovieSlider from './SimpleMovieSlider';
import MovieListHeader from '../MovieListHeader/MovieListHeader';

function SimpleMovieList({listData, ...props}) {
  return (
    <div className={classes.listContainer}>
        <MovieListHeader title={listData.title} brand={listData.watchProvider.logo_path} seeMore={'/seeMore'} edit={props.edit}/>
        <SimpleMovieSlider listData={listData} edit={props.edit}/>
    </div>

  )
}

export default SimpleMovieList