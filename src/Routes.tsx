import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import Home from './pages/Home/HomePage';
import List from './pages/List/ListPage';
import AboutUs from './pages/AboutUs/AboutUs';

const MainRoutes = ():JSX.Element => {
    return (
        <BrowserRouter>
        <div className="main__left">
            <Navbar/>
        </div>
        <div className='main__right'>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/list" element={<List/>} />
                <Route path="/edit/:id" element={<Edit/>} />
                <Route path="/about" element={<AboutUs/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
};

export default MainRoutes;