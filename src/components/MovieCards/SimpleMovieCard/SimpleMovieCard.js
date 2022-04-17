import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import classes from './SimpleMovieCard.module.scss';
import PlayArrowIcon from '../../../assets/img/myPlayOutlined';
import AddIcon from '@mui/icons-material/Add';
import AddOutlinedIcon from '../../../assets/img/myAddOutlined.js';
import BlockIcon from '../../../assets/img/myBlockOutlined.js';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';

import AgeRateIcon from '../../UI/Icon/AgeRateIcon';
import SubtitlesIcon from '../../../assets/img/SubtitlesIcon';
import MyCostumToolTip from '../../UI/MyCostumToolTip/MyCostumToolTip';
import IncludedPrimeBadge from '../../UI/Icon/IncludedPrimeBadge';
import MyExcludeFilled from '../../../assets/img/myExcludeFilled';
import MovieBackInfoTrailer from '../../MovieBackInfoTrailer/MovieBackInfoTrailer';
import { MuteContext } from '../../../store/mute-context';

const soundTogglerStyle = {
  top: '16px',
  right: '16px',
  width: '33px',
  height: '33px'
}

function SimpleMovieCard({movieData, ...props}) {

  const [showMovieContent, setShowMovieContent] = useState(false);

  const onMouseTrailer = () => {
    setShowMovieContent(true);
  }

  const onMouseTrailerLeave = () => {
    setShowMovieContent(false);
  }

  const muteCtx = useContext(MuteContext);
  return (
    <>
      {props.edit && props.edit.value &&
        <>
          <div className={classes.editBackdrop}>
            <button onClick={() => {props.edit.onExclude(movieData.id)}}>
              <MyExcludeFilled />
            </button>
          </div>
        </>
      }
        
      <div className={classes.cardContainer}>
        <div className={classes.innerContainer} onMouseEnter={onMouseTrailer} onMouseLeave={onMouseTrailerLeave}>
        <span className={classes.badgeContainer}>
          <IncludedPrimeBadge includedWithPrime={movieData.watchProvider.included_with_prime} tooltip={true}/>
        </span>
          <div className={classes.cardHeader} style={{backgroundImage: `url(${movieData.posterPath})`}} >
            {showMovieContent && movieData.trailerID &&
              <MovieBackInfoTrailer setShowMovieContent={setShowMovieContent} muted={muteCtx.isMuted} setIsMuted={muteCtx.setIsMuted} movieID={movieData.trailerID} soundTogglerStyle={soundTogglerStyle}/>
            }
          </div>

          <div className={classes.cardContent}>
            <div className={classes.cardBody}>
              <div className={classes.actionContainer}>
                  <button className={classes.btnPlayMovie}>
                    <PlayArrowIcon />
                  </button>
                  <span className={classes.spnMovieTitle}>{movieData.title}</span>
                  <div className={classes.smallActionsContainer}>
                    <MyCostumToolTip title="Play Trailer" options={{arrow:true, placement:'top'}}>
                      <button>
                        <PlayArrowIcon className={classes.icon}/>
                      </button> 
                    </MyCostumToolTip>
                    <MyCostumToolTip title="Add to Watch List" options={{arrow:true, placement:'top'}} fontSize='large'>
                      <button>
                        <AddOutlinedIcon className={classes.icon}/>
                      </button> 
                    </MyCostumToolTip>
                    <MyCostumToolTip title="Hide" options={{arrow:true, placement:'top'}} >
                      <button onClick={() => {props.edit.onExclude(movieData.id)}}>
                        <BlockIcon className={classes.icon} />
                      </button> 
                    </MyCostumToolTip>
    
                  </div>
              </div>

              <div className={classes.cardContentText}>
                <p className={classes.pProviderTag}>{movieData.watchProvider.included_sentence}</p>

                <h3 className={classes.cardMovieTitle}>{movieData.title}</h3>
                <p className={classes.movieDescription}>{movieData.description}</p>
              </div>
              
            </div>

              <div className={classes.cardFooter}>
                <label className={classes.movieDuration}>{movieData.duration}</label>
                <label className={classes.movieYear}>{movieData.year}</label>
                { movieData.hasSubtitles &&
                  <label className={classes.movieHasSubtitles}>
                      <SubtitlesIcon />
                  </label>
                }
                <label className={classes.movieAgeRate}>
                  <AgeRateIcon age={movieData.ageRating} />
                </label>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SimpleMovieCard