import React from 'react'
import SimpleMovieCard from '../../MovieCards/SimpleMovieCard/SimpleMovieCard';
import classes from './SimpleMovieList.module.scss';

function SimpleMovieList({listData, ...props}) {

  return (
    <div className={classes.listContainer}>
        <ul>
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
            <li key={movie.id}>
                <SimpleMovieCard movieData={{
                    watchProvider: 'Prime',
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
                    trailerLink: '/'
                }}/>

            </li>
            )
        })}
        </ul>
    </div>
  )
}

export default SimpleMovieList