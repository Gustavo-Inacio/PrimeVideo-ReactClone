import React, { useEffect, useState } from 'react';
import classes from './BannerItem.module.scss';
import MovieOverlayInfo from '../../MovieOverlayInfo/MovieOverlayInfo';
import MovieBackInfoTrailer from '../../MovieBackInfoTrailer/MovieBackInfoTrailer';
import {SoundToggler} from '../../UI/Button/MyButton';

function BannerItem(props) {
    const conatinerStyles = {
        ...props.style, 
        display: 'flex',
        backgroundImage:`url(${props.backdrop_path})`
    }

    const [showMovieContent, setShowMovieContent] = useState(false);


    const movieContent = <MovieOverlayInfo key={props.info.id} info={props.info} style={{width: 'calc(50% - 48px)', height: '100%'}}/>;

    let movieTrailer = null;
    if(props.info.videos.results.length > 0)
      movieTrailer = (
        <MovieBackInfoTrailer key={props.info.videos.results[0].id} info={props.info} movieID={props.info.videos.results[0].key} muted={props.isMuted} setIsMuted={props.setIsMuted}/>
      );
  
    const bannerHoverHandler = () => {
      setShowMovieContent(true)
    }

  return (
      <div className={[props.className, classes.container].join(' ')} style={conatinerStyles} onMouseEnter={bannerHoverHandler}>
        {props.isActive &&
            <>
              {showMovieContent && movieContent}
              {showMovieContent &&  movieTrailer}
            </>
        }
      </div>
  );
}

export default BannerItem;
