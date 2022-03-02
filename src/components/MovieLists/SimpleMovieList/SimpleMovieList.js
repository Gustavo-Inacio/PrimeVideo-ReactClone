import React from 'react'
import SimpleMovieCard from '../../MovieCards/SimpleMovieCard/SimpleMovieCard';
import classes from './SimpleMovieList.module.scss';

function SimpleMovieList({data, ...props}) {
  return (
    <div>
        <SimpleMovieCard movieData={{
            watchProvider: 'Prime',
            posterPath: '/',
            detailedVideoLink: '/',
            title: `${'name'} - ${'season 0'}`,
            description: 'Lor em Lorem LoremL o re mLor emLor emLoremL orem Lorem',
            year: '2021',
            ageRating: '16',
            duration: '1h 20min',
            hasSubtitles: true,
            progress: '0.8',
            playLink: '/',
            trailerLink: '/'
        }}/>
    </div>
  )
}

export default SimpleMovieList