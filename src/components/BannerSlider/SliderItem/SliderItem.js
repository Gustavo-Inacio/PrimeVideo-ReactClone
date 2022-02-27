import React from 'react';
import classes from './SliderItem.module.css';

function SliderItem({children, className, style}) {
  return (
    <div className={[classes.bannerItem, className].join(' ')} style={style}>
          {children}
    </div>
  );
}

export default SliderItem;
