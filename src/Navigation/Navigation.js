import React from 'react';
import classes from './Navigation.module.css';
import MyNavLink from './NavLink/MyNavLink';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Navigation(props) {

    const linkStyle = {
        width: '200px'
    }

  return (
    <div className={classes.navigation}>
        
        <div className={classes.browseResponsive} onClick={props.onBackdropToggler}>
            <p>Browse</p>
            <ArrowDropDownIcon/>
        </div>
        <ul style={{display: (props.showExtended ? 'flex' : 'none')}}>
            <li className={classes.navigationItem}>
               <MyNavLink style={linkStyle} to={'/'}>Home </MyNavLink>
            </li>
            <li className={classes.navigationItem}>
                <MyNavLink style={linkStyle} to='/store'>Store</MyNavLink>
            </li>
            <li className={classes.navigationItem}>
                <MyNavLink style={linkStyle} to='/channels'>Channels</MyNavLink>
            </li>
            <li className={classes.navigationItem}>
                <MyNavLink style={linkStyle} to='/categories'>Categories</MyNavLink>
            </li>
            <li className={classes.navigationItem}>
                <MyNavLink style={linkStyle} to='/mystuff'>My Stuff</MyNavLink>
            </li>
        </ul>

        
    </div>
  );
}
