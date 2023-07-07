import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactPage from './pages/Contact/ContactPage';
import MenuPage from './pages/List/Menu/MenuPage';
import AddPage from './pages/Add/AddPage';

const MainRoutes = ():JSX.Element => {
    return (
        <BrowserRouter>
        <div className="main__left">
            <Navbar/>
        </div>
        <div className='main__right'>
            <Routes>
                <Route path="/" element={<MenuPage/>} />
                <Route path="/add" element={<AddPage/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path='/contact' element={<ContactPage/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
};

export default MainRoutes;