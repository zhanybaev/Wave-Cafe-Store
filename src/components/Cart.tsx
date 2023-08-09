import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { getDeliveryDate } from "../utils/functions";
import { getCartProducts } from "../store/actions/cart.action";
import CartProduct from "./CartProduct.Card";
import CartNotification from "./CartNotification";

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const deliveryDate = getDeliveryDate()
    const cartProducts = useAppSelector(state=>state.cart)
    const taxPrice = 14
    const totalPrice = (cartProducts.cart?.totalPrice || 0) + taxPrice

    useEffect(()=>{
        getCartProducts(dispatch)
    }, [])
    
    return (
        <>
            {
                cartProducts.cart?.products.length && cartProducts.cart.totalPrice ? 
                <>
                    <div className="cart__list">
                        <h5>Cart</h5>
                        <div className="cartProducts">
                            {
                                cartProducts.cart?.products.map((item)=>(
                                    <div key={item.item.id}>
                                        <hr />
                                        <CartProduct product={item} />                            
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="pricing">
                        <h6>Delivery</h6>
                        <div className="pricing__date">
                            <div className="switch-field">
                                <input type="radio" id="radio-one" name="switch-one" defaultChecked />
                                <label htmlFor="radio-one">Free</label>
                                <input type="radio" id="radio-two" name="switch-one"/>
                                <label htmlFor="radio-two">Express:$9.99</label>
                            </div>
                            <span>Delivery date: {deliveryDate}</span>
                        </div>
                        <div className="border"></div>
                        <div className="pricing__promocode">
                            <form>
                                <input placeholder="Promocode" />
                                <button type="submit" >Apply</button>
                            </form>
                            <p>20% off discount</p>
                        </div>
                        <div className="border"></div>
                        <div className="pricing__subtotal">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>${cartProducts.cart?.totalPrice}</span>
                            </div>
                            <div className="discount">
                                <span>Discount</span>
                                <span>(20%) - $16.19</span>
                            </div>
                            <div className="delivery">
                                <span>Delivery</span>
                                <span>$0.00</span>
                            </div>
                            <div className="tax">
                                <span>Tax</span>
                                <span>+ ${taxPrice}</span>
                            </div>
                        </div>
                        <div className="border"></div>
                        <div className="pricing__total">
                            <div>
                                <span>Total</span>
                                <span>${totalPrice}</span>
                            </div>
                        </div>
                        <div className="pricing__action">
                            <button>Proceed to checkout</button>
                            <button onClick={()=>navigate('/')}>Continue shopping</button>
                        </div>
                    </div>            
                </> :
                <CartNotification/>
            }
        </>
    );
};

export default Cart;