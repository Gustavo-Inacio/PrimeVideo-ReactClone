import React from 'react';
import classes from './BannerSequencialControlls.module.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function BannerSequencialControlls(props) {
  return (
      <div className={[props.className, classes.container].join(' ')} style={props.style} onClick={props.onClick}>
          {props.next ? <ArrowForwardIosIcon sx={{ fontSize: 30, color: '#eff1f1' }}/> : <ArrowBackIosNewIcon  sx={{ fontSize: 30 , color: '#eff1f1' }}/>}
          <div className={[classes.fade, (props.next ? '' : classes.back)].join(' ')}></div>
      </div>
  );
}

export default BannerSequencialControlls;
