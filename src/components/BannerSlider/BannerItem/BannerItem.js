import React, { useContext, useEffect, useState } from 'react';
import { MuteContext } from '../../../store/mute-context';
import classes from './BannerItem.module.scss';
import MovieOverlayInfo from '../../MovieOverlayInfo/MovieOverlayInfo';
import MovieBackInfoTrailer from '../../MovieBackInfoTrailer/MovieBackInfoTrailer';

function BannerItem(props) {
    const conatinerStyles = {
        ...props.style, 
        display: 'flex',
        backgroundImage:`url(${props.backdrop_path})`
    }

    const muteCtx = useContext(MuteContext);
    const [showMovieContent, setShowMovieContent] = useState(false);
    const scrollHandler = () => {
      if(window.scrollY > 200) setShowMovieContent(false)
    }

    const bannerHoverHandler = () => {
      setTimeout(() => {
        setShowMovieContent(true)
        window.addEventListener('scroll', scrollHandler)

      }, 1000);
    }

    useEffect(() => {
      if(!showMovieContent) {
        window.removeEventListener("scroll", scrollHandler)
      }
    }, [showMovieContent]);

    const movieContent = <MovieOverlayInfo key={props.info.id} info={props.info} style={{height: '100%'}}/>;

    let movieTrailer = null;
    if(props.info.videos.results.length > 0)
      movieTrailer = (
        <MovieBackInfoTrailer 
          key={props.info.videos.results[0].id} 
          info={props.info} 
          movieID={props.info.videos.results[0].key} 
          muted={muteCtx.isMuted} setIsMuted={muteCtx.setIsMuted}
          setShowMovieContent={setShowMovieContent}
        />
      );
  return (
      <div className={[props.className, classes.container].join(' ')} style={conatinerStyles} onMouseEnter={bannerHoverHandler} onTouchStart={bannerHoverHandler}>
        {(props.isActive && window.innerWidth > 750 )&&
            <>
                {showMovieContent && 
                  <span className={classes.movieInfo}>
                    {movieContent}
                  </span>
                }
              
              <div className={classes.movieBackInfoContainer}>
                <div className={classes.movieTrailerGradient}></div>
                {showMovieContent &&  movieTrailer}
              </div>
            </>
        }
      </div>
  );
}

export default BannerItem;
