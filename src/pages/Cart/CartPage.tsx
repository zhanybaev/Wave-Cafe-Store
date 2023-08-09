import Cart from '../../components/Cart';
import CartNotification from '../../components/CartNotification';
import { useAppSelector } from '../../store';

const CartPage = () => {
    const { user } = useAppSelector(state=>state.auth)
    return (
        <>
            <section className="cart">
                <div className="cart__text">
                    <h2>Cart Page</h2>
                    <p>
                        Thank you for choosing our online coffee shop! We're excited to help you complete your purchase and bring the perfect coffee to your home.
                    </p>
                </div>
                {
                    user ? <Cart/> : <CartNotification loggedIn={false} />
                }
            </section>
        </>
    );
};

export default CartPage;