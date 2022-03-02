import React from 'react'
import SimpleMovieCard from '../../MovieCards/SimpleMovieCard/SimpleMovieCard';
import classes from './SimpleMovieList.module.scss';

function SimpleMovieList({listData, ...props}) {

    console.log(listData)

  return (
    <div className={classes.listContainer}>
        <ul>
        {listData && listData.list.results.map((movie) => (
            <li>
                <SimpleMovieCard movieData={{
                    watchProvider: 'Prime',
                    posterPath: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
                    detailedVideoLink: '/',
                    title: `${'name'} - ${'season 0'}`,
                    description: 'Lor em Lorem LoremL o re mLor emLor emLoremL orem Lorem',
                    year: '2021',
                    ageRating: '18',
                    duration: '1h 20min',
                    hasSubtitles: true,
                    progress: '0.8',
                    playLink: '/',
                    trailerLink: '/'
                }}/>

            </li>
        ))}
        </ul>
    </div>
  )
}

export default SimpleMovieList