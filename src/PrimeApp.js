import React, { useState } from 'react';
import NavBar from './NavBar/NavBar';
import {Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './Home/Home';
import MyBackdrop from './MyBackdrop/MyBackdrop';

function PrimeApp() {
    const [backdropShow, setBackdropShow] = useState(false);

    const backdropClickHandler = () => {
        setBackdropShow(prevState => {
            return !prevState;
        });
    }

    let blockMoveStyle = {
        overflow: 'hidden',
        height: '100vh'
    }

  return (
    <BrowserRouter>
        <div className="App" style={ (backdropShow ? blockMoveStyle : {})}>
            <MyBackdrop show={backdropShow} onClick={backdropClickHandler}></MyBackdrop>
            <NavBar onBackdropToggler={backdropClickHandler} showNavigation={backdropShow}></NavBar>
        
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default PrimeApp;
