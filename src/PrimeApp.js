import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import {Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home/Home';
import MyBackdrop from './components/MyBackdrop/MyBackdrop';
import Categories from './components/Categories/Categories';
import Store from './pages/Store/Store';

const PrimeApp = () => {
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
                <Route path="/categories" element={<Categories></Categories>}></Route>
                <Route path="/store" element={<Store></Store>}></Route>
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default PrimeApp;
