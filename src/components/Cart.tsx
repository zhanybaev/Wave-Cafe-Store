import { getDeliveryDate } from "../utils/functions";
import CartProduct from "./CartProduct.Card";

const Cart = () => {
    const deliveryDate = getDeliveryDate()

    return (
        <section className="cart">
            <div className="cart__text">
                <h2>Cart Page</h2>
                <p>
                    Thank you for choosing our online coffee shop! We're excited to help you complete your purchase and bring the perfect coffee to your home.
                </p>
            </div>
            <div className="cart__list">
                <h5>Cart</h5>
                <div className="cartProducts">
                    <hr />
                    <CartProduct/>
                    <hr />
                    <CartProduct/>
                </div>
            </div>
            <div className="pricing">
                <h6>Delivery</h6>
                <div className="pricing__date">
                    <div className="switch-field">
                        <input type="radio" id="radio-one" name="switch-one" checked />
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
                        <span>$90.96</span>
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
                        <span>+ $14.00</span>
                    </div>
                </div>
                <div className="border"></div>
                <div className="pricing__total">
                    <div>
                        <span>Total</span>
                        <span>$78.76</span>
                    </div>
                </div>
                <div className="pricing__action">
                    <button>Proceed to checkout</button>
                    <button>Continue shopping</button>
                </div>
            </div>
        </section>
    );
};

export default Cart;