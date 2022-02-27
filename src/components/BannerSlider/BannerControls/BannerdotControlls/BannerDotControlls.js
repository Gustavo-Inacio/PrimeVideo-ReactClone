import React from 'react';
import classes from './BannerDotControlls.module.css';

function BannerDotControlls({className, style, activeItem, ...props}) {
    let dots = [];

    const dotClickHandler = (e) => {
        props.dotClicked(e.target.attributes.myindex.value)
    }

    for(let i = 0; i < props.quantity; i++){
        dots.push(
            <div className={[classes.dot, (activeItem == i ? classes.activeDot : '')].join(' ')} key={i} onClick={dotClickHandler} myindex={i}></div>
        );
    }
    
  return (
    <div className={[className, classes.dotControls].join(' ')} style={style}>
        {dots}
    </div>
  );
}

export default BannerDotControlls;
