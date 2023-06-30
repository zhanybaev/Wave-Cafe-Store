import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faComments, faMartiniGlass, faMugHot, faMugSaucer, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <header>
                <FontAwesomeIcon className="header__icon" icon={faMugSaucer} />
                <h1>Wave Cafe</h1>
            </header>
            <NavLink className='nav__item' to='/'>
                <FontAwesomeIcon className="nav__icon" icon={faMugHot} />
                <span>   
                    Drink Menu
                </span>
            </NavLink>
            <NavLink className='nav__item' to='/about'>
                <FontAwesomeIcon className="nav__icon" icon={faUsers} />
                <span>
                    About Us
                </span>
            </NavLink>
            <NavLink className='nav__item' to="/special-menu">
               <FontAwesomeIcon className="nav__icon" icon={faMartiniGlass} />
               <span>
                    Special Items
                </span>
            </NavLink>
            <NavLink className='nav__item' to='/contact'>
                <FontAwesomeIcon className="nav__icon" icon={faComments} />
                <span>
                    Contact
                </span>
            </NavLink>
            <NavLink className='nav__item' to="/cart">
                <FontAwesomeIcon className="nav__icon" icon={faCartShopping} />
                <span>
                    Cart
                </span>
            </NavLink>
            <NavLink className='nav__item' to="/auth">
                <FontAwesomeIcon className="nav__icon" icon={faCartShopping} />
                <span>
                    Login
                </span>
            </NavLink>
        </nav>
    );
};

export default Navbar;