import React from 'react';
import classes from './Navigation.module.css';
import MyNavLink from './NavLink/MyNavLink';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Categories from '../Categories/Categories';

export default function Navigation(props) {

    const linkStyle = {}

  return (
    <div className={[classes.navigation, props.className].join(' ')}>
        
        <div className={classes.browseResponsive} onClick={props.onBackdropToggler}>
            <div className={classes.hamburger}>
                <MenuIcon></MenuIcon>
            </div>
            <p>Browse</p>
            <ArrowDropDownIcon/>
        </div>
        <ul style={{display: (props.showExtended ? 'flex' : 'none')}}>
            <li className={classes.navigationItem}>
               <MyNavLink style={linkStyle} className={classes.myNavLink} to={'/'}>Home</MyNavLink>
            </li>
            <li className={classes.navigationItem}>
                <MyNavLink style={linkStyle} className={classes.myNavLink} to='/store'>Store</MyNavLink>
            </li>
            <li className={classes.navigationItem}>
                <MyNavLink style={linkStyle} className={classes.myNavLink} to='/channels'>Channels</MyNavLink>
            </li>
            <li className={[classes.navigationItem, classes.categoriesItem, classes.categorieBigScreenLink].join(' ')}>
                <p className={classes.dumbNavLink}>Categories</p>
                <section className={classes.categoriesDropSection}>
                    <Categories></Categories>
                </section>
                <ArrowDropDownIcon sx={{ color: '#ffff' }} />
            </li>
            <li className={[classes.navigationItem, classes.categoriesItem, classes.categorieSmallScreenLink].join(' ')}>
                <MyNavLink style={linkStyle} className={classes.myNavLink} to='/categories'>Categories</MyNavLink>
                <section className={classes.categoriesDropSection}>
                    <Categories></Categories>
                </section>
            </li>
            <li className={classes.navigationItem}>
                <MyNavLink style={linkStyle} className={classes.myNavLink} to='/mystuff'>My Stuff</MyNavLink>
            </li>
        </ul>

        

        
    </div>
  );
}
