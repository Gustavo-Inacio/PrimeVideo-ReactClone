import React from 'react'
import classes from './NavBar.module.css';
import {NavLink, useResolvedPath,useMatch, Outlet} from 'react-router-dom'
import profileIMG from '../assets/img/profile-img.png';
import logo from '../assets/img/logo.svg';

import Home from '../Home/Home';
import Navigation from '../Navigation/Navigation';
// import SearchIcon from '../assets/img/search-icon.svg'

const NavBar = (props) => {
    // let resolved = useResolvedPath('/');
    // console.log(resolved);
    // let match = useMatch({ path: resolved.pathname, end: true });
    // console.log(match)

    return (
        <div className={classes.container}>
            <div className={classes.navbar}>
                <div className={classes.logo}>
                    <NavLink to={'/'}>
                        <img src={logo}></img>
                    </NavLink>
                </div>

                <Navigation onBackdropToggler={props.onBackdropToggler} showExtended={props.showNavigation}></Navigation>
                {/* <div className={classes.navigation}>
                    <ul>
                        <li className={classes.navigationItem}>
                            <NavLink to='/' elemnt={<Home></Home>}>Home</NavLink>
                        </li>
                        <li className={classes.navigationItem}>
                            <NavLink to='/store'>Store</NavLink>
                        </li>
                        <li className={classes.navigationItem}>
                            <NavLink to='/channels'>Channels</NavLink>
                        </li>
                        <li className={classes.navigationItem}>
                            <NavLink to='/categories'>Categories</NavLink>
                        </li>
                        <li className={classes.navigationItem}>
                            <NavLink to='/mystuff'>My Stuff</NavLink>
                        </li>
                    </ul>
                </div> */}
                <div className={classes.searchBarDiv}>
                    <svg className={classes.searchIcon} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
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
