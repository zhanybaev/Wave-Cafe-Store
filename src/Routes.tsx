import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './pages/AboutUs/AboutUs';
import ContactPage from './pages/Contact/ContactPage';
import MenuPage from './pages/List/Menu/MenuPage';
import AddPage from './pages/Add/AddPage';
import SpecialItemsPage from './pages/List/SpecialItems/SpecialItemsPage';
import AuthPage from './pages/Auth/AuthPage';
import CartPage from './pages/Cart/CartPage';

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
                <Route path='/special-menu' element={<SpecialItemsPage/>} />
                <Route path='/auth' element={<AuthPage/>} />
                <Route path='/cart' element={<CartPage/>} />
            </Routes>
        </div>
        </BrowserRouter>
    );
};

export default MainRoutes;