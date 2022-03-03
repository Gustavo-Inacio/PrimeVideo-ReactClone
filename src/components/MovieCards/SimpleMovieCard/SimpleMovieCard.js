import React from 'react'
import classes from './SimpleMovieCard.module.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import BlockIcon from '@mui/icons-material/Block';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import {Tooltip} from '@material-ui/core';
import AgeRateIcon from '../../UI/Icon/AgeRateIcon';
import SubtitlesIcon from '../../../assets/img/SubtitlesIcon';

function SimpleMovieCard({movieData, ...props}) {
  return (
    <div className={classes.cardContainer}>
      <div className={classes.innerContainer}>
        <div className={classes.cardHeader} style={{backgroundImage: `url(${movieData.posterPath})`}}>
            
        </div>

        <div className={classes.cardContent}>
          <div className={classes.cardBody}>
            <div className={classes.actionContainer}>
                <button className={classes.btnPlayMovie}>
                  <PlayArrowIcon />
                </button>
                <span className={classes.spnMovieTitle}>{movieData.title}</span>
                <div className={classes.smallActionsContainer}>
                  <Tooltip title="Play Trailer" arrow> 
                    <button>
                      <PlayArrowOutlinedIcon />
                    </button> 
                  </Tooltip>
                  <Tooltip title="Add to Watch List" arrow> 
                    <button>
                      <AddIcon/> 
                    </button> 
                  </Tooltip>
                  <Tooltip title="Hide" arrow> 
                    <button>
                      <BlockIcon />  
                    </button> 
                  </Tooltip>
                </div>
            </div>

            <div className={classes.cardContentText}>
              <p className={classes.pProviderTag}>Included with Prime</p>

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
  )
}

export default SimpleMovieCard