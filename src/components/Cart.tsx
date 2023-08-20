import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../store";
import { getDeliveryDate, roundToHundredth } from "../utils/functions";
import { getCartProducts } from "../store/actions/cart.action";
import CartProduct from "./CartProduct.Card";
import CartNotification from "./CartNotification";
import Modal from "./Modal";

const Cart = () => {
    const [showModal, setShowModal] = useState(false)
    const cartProducts = useAppSelector(state=>state.cart)
    const [freeDelivery, setFreeDelivery] = useState(true)
    const [promocodePrice, setPromocodePrice] = useState(0)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const deliveryDate = getDeliveryDate()
    const deliveryPrice = freeDelivery ? 0 : 9.99
    const taxPrice = 14
    const price = (cartProducts.cart?.totalPrice || 0) + taxPrice + deliveryPrice
    const finalPrice = roundToHundredth(price-promocodePrice)

    const applyPromocode = (e:React.FormEvent) =>{
        e.preventDefault()

        setPromocodePrice(price*0.2)
    }

    const goToCheckout = async () =>{
        setShowModal(true)
    }

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
                                <input onChange={()=>setFreeDelivery(val=>!val)} type="radio" id="radio-one" name="switch-one" checked={freeDelivery} />
                                <label htmlFor="radio-one">Free</label>
                                <input onChange={()=>setFreeDelivery(val=>!val)} type="radio" id="radio-two" name="switch-one" checked={!freeDelivery} />
                                <label htmlFor="radio-two">Express:$9.99</label>
                            </div>
                            <span>Delivery date: {deliveryDate}</span>
                        </div>
                        <div className="border"></div>
                        <div className="pricing__promocode">
                            <form onSubmit={applyPromocode} >
                                <input required placeholder="Promocode" />
                                <button type="submit">Apply</button>
                            </form>
                            <p>20% off discount</p>
                        </div>
                        <div className="border"></div>
                        <div className="pricing__subtotal">
                            <div className="subtotal">
                                <span>Subtotal</span>
                                <span>${roundToHundredth(cartProducts.cart?.totalPrice)}</span>
                            </div>
                            <div className="discount">
                                <span>Discount</span>
                                <span>(20%) - ${promocodePrice}</span>
                            </div>
                            <div className="delivery">
                                <span>Delivery</span>
                                <span>${deliveryPrice}</span>
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
                                <span>${finalPrice}</span>
                            </div>
                        </div>
                        <div className="pricing__action">
                            <button onClick={goToCheckout} >Proceed to checkout</button>
                            <button onClick={()=>navigate('/')}>Continue shopping</button>
                        </div>
                    </div>    
                    <Modal role="payment" setShowModal={setShowModal} showModal={showModal} key={'payment'} />        
                </> :
                <CartNotification/>
            }
        </>
    );
};

export default Cart;