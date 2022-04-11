import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import SimpleMovieCard from '../../MovieCards/SimpleMovieCard/SimpleMovieCard';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import classes from './SimpleMovieList.module.scss';
import '../movieListSwiper.scss';
import SimpleMovieSlider from './SimpleMovieSlider';
import MovieListHeader from '../MovieListHeader/MovieListHeader';

function SimpleMovieList({listData, ...props}) {
  return (
    <div style={{position: 'relative'}}>
        <MovieListHeader title={listData.title} brand={listData.watchProvider.logo_path}/>
        <SimpleMovieSlider listData={listData}/>
    </div>

  )
}

export default SimpleMovieList