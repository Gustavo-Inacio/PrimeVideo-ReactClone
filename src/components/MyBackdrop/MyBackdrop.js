import React from 'react';
import classes from './MyBackdrop.module.css'

function MyBackdrop({className, style, children, zIndex, onClick, ...props}) {
    
    let backdropStyle = {
        zIndex: zIndex,
        display: (props.show ? 'block' : 'none'),
        ...style
    }

  return (
    <div className={[classes.backdrop, className].join(' ')} onClick={onClick} style={backdropStyle}>{children}</div>
  );
}

export default MyBackdrop;
