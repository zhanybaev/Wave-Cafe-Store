import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

interface ICartNotificationProps {
    loggedIn?: boolean
}

const CartNotification = ({loggedIn=true}:ICartNotificationProps) => {
    return (
        <div className='cart__notification'>
            <FontAwesomeIcon icon={faCartShopping} />
            <h2>Your Shopping Cart is Empty</h2>
            {
                loggedIn ? <></> : <h4>Please <Link to="/auth">SIGN IN</Link> to view your saved Cart</h4>
            }
        </div>
    );
};

export default CartNotification;