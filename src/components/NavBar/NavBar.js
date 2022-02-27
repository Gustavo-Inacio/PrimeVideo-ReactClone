import React from 'react'
import classes from './NavBar.module.css';
import {NavLink, useResolvedPath,useMatch, Outlet} from 'react-router-dom'
import logo from '../../assets/img/search-icon.svg';

import Navigation from '../Navigation/Navigation';

const NavBar = (props) => {

    return (
        <div className={classes.container}>
            <div className={classes.navbar}>
                <div className={classes.logo}>
                    <NavLink to={'/'}>
                        <img src={logo}></img>
                    </NavLink>
                </div>

                <Navigation className={classes.navigation} onBackdropToggler={props.onBackdropToggler} showExtended={props.showNavigation}></Navigation>
    
                <div className={classes.searchBarDiv}>
                    <input className={classes.inputQuery} placeholder='Search'></input>
                </div>

                <div className={classes.profileContainer}>
                    <div className={classes.profileIMG}></div>
                    <div className={classes.profileNameContainer}>
                        <p>UserName</p>
                    </div>
                </div>
               
                
            </div>
            <Outlet/>
        </div>
    )
}

export default NavBar
