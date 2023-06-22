import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faComments, faMartiniGlass, faMugHot, faMugSaucer, faUsers } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div>
                <FontAwesomeIcon icon={faMugSaucer} />
                Wave Cafe
            </div>
            <NavLink className='nav__item' to='/drink-menu'>
                <FontAwesomeIcon icon={faMugHot} />
                <div>   
                    Drink Menu
                </div>
            </NavLink>
            <NavLink className='nav__item' to='/about'>
                <FontAwesomeIcon icon={faUsers} />
                <div>
                    About Us
                </div>
            </NavLink>
            <NavLink className='nav__item' to="/special-menu">
               <FontAwesomeIcon icon={faMartiniGlass} />
                <div>
                    Special Items
                </div>
            </NavLink>
            <NavLink className='nav__item' to='/contact'>
                <FontAwesomeIcon icon={faComments} />
                <div>
                    Contact
                </div>
            </NavLink>
            <NavLink className='nav__item' to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <div>
                    Cart
                </div>
            </NavLink>
            <div>
                Log in
            </div>
        </nav>
    );
};

export default Navbar;