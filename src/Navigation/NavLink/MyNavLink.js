import React from 'react';
import classes from './MyNavLink.module.css';
import {Link, useResolvedPath,useMatch} from 'react-router-dom'

export default function MyNavLink({children, to, style, ...props}) {
  let path = useResolvedPath(to);
  let match = useMatch({ path: path.pathname, end: true });

  let linkClasses = [];
  if(match){
    linkClasses.push(classes.aciveLink);
  }

  return (
    <Link to={to} {...props} className={linkClasses} style={style}>
      {children}
    </Link>
  );
}
