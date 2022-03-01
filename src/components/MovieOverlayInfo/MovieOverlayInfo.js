import React from 'react';
import { MovieTittle } from '../UI/Text/Tittle';
import { MovieDescription } from '../UI/Text/Paragraph';
import MyContainer from '../UI/Container/MyContainer';
import { ThemeProvider } from 'styled-components';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

import mainTheme from '../UI/Themes/mainTheme';
import { MyButton } from '../UI/Button/MyButton';

import classes from './MovieOverlayInfo.module.scss';

function MovieOverlayInfo({info, style, ...props}) {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className={classes.container} style={{...style, background: mainTheme.background['black']}}>
        <MovieTittle>{info.title}</MovieTittle>
        <MovieDescription color="#b1b1b1">{info.overview}</MovieDescription>
        <MyContainer display='flex' direction='row' gap='8px' style={{marginTop: 'auto'}}>
            <MyButton colorIndex={0}>
                <PlayArrowIcon sx={{fontSize:'30px'}}/> <span>Wacth now</span> 
            </MyButton>
            <MyButton colorIndex={1} outlined>
              <AddIcon sx={{fontSize:'30px'}}/> <span>Watch List</span>
            </MyButton>
            <MyButton colorIndex={1} outlined>Details</MyButton>
        </MyContainer>
      </div>
    </ThemeProvider>
  );
}

export default MovieOverlayInfo;
