import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home/HomePage';
import List from './pages/List/ListPage';

const MainRoutes = ():JSX.Element => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/list" element={<List/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default MainRoutes;