import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MovieListHeader.module.scss'

function MovieListHeader({className, style, ...props}) {
  return (
    <div className={[className, classes.movieListHeaderContainer].join(' ')} style={style}>
        <span className={classes.leftSide}>
            {props.brand && <img src={props.brand} className={classes.brand}/>}
            <h2 className={classes.listTitle}>{props.title}</h2>
            {props.seeMore && <Link to={props.seeMore}>See More</Link> }
        </span>
    </div>
  )
}

export default MovieListHeader