import React from 'react'
import classes from './SimpleMovieCard.module.scss'

function SimpleMovieCard({movieData, ...props}) {
  return (
    <div className={classes.cardContainer}>
        <div className={classes.cardHeader} style={{backgroundImage: `url(${movieData.posterPath})`}}>
            
        </div>
    </div>
  )
}

export default SimpleMovieCard