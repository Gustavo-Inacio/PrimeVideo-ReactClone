import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import SimpleMovieCard from '../../MovieCards/SimpleMovieCard/SimpleMovieCard';

import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';

import classes from './SimpleMovieSlider.module.scss';
import '../movieListSwiper.scss';

function SimpleMovieSlider({listData , ...props}) {
    const nextNavigator = useRef(null);
    const beforeNavigator = useRef(null);

  return (
    <div style={{position: 'relative'}}>
        <button className={classes.arrowLeft} ref={beforeNavigator}>
          <ArrowBackIosNewOutlinedIcon sx={{ color: "#fff"}} fontSize="large"/>
        </button>
        <button className={classes.arrowRight}  ref={nextNavigator}>
            <ArrowForwardIosOutlinedIcon  sx={{ color: "#fff" }} fontSize="large"/>
        </button>
        <Swiper className='movieListSwiper' 
            navigation={{
                nextEl: nextNavigator.current,
                prevEl: beforeNavigator.current,
            }}

            onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = beforeNavigator.current
                swiper.params.navigation.nextEl = nextNavigator.current
            }}

            breakpoints={{
                310: {
                    slidesPerView: 1.4,
                    slidesPerGroup:1,
                    spaceBetween: 5,
                },
                400: {
                    slidesPerView: 1.6,
                    slidesPerGroup:1,
                    spaceBetween: 5,
                },
                600: {
                  slidesPerView: 2.3,
                  slidesPerGroup:2,
                  spaceBetween: 5,
                },
                768: {
                  slidesPerView: 3.2,
                  slidesPerGroup:2,
                  spaceBetween: 10,
                },
                1024: {
                  spaceBetween: 15,
                  slidesPerView: 4,
                  slidesPerGroup:2,
                  spaceBetween: 15,
                },
                1524: {
                  spaceBetween: 15,
                  slidesPerView: 6,
                  slidesPerGroup:2,
                  spaceBetween: 15,
                },
              }}

            modules={[Navigation]}
            spaceBetween={18}
            slidesPerGroupSkip={1}
            slidesPerGroup={2}
            slidesPerView='1.23'
        >
            {listData && listData.list.map((movie) => {
                let ageRate = movie.release_and_ageRating.results.map((item) => {
                    if(item.release_dates[0].certification > 0){
                        return item.release_dates[0].certification
                    }
                    else{
                        return null
                    }
                });

                return(
                <SwiperSlide key={movie.id} >
                    <SimpleMovieCard movieData={{
                        watchProvider: listData.watchProvider,
                        posterPath: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
                        detailedVideoLink: '/',
                        title: `${movie.title}`,
                        description: movie.overview,
                        year: (new Date(movie.release_date)).getFullYear(),
                        ageRating: ageRate[0] || '',
                        duration: '1h 20min',
                        hasSubtitles: true,
                        progress: '0.8',
                        playLink: '/',
                        trailerLink: '/',
                        id: movie.id
                    }} 

                    edit={props.edit}
                    />

                </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default SimpleMovieSlider