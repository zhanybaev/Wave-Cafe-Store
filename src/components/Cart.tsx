import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Cart = () => {
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
                    <div className="product">
                        <img loading="lazy" src="https://static.vecteezy.com/system/resources/previews/000/340/838/original/vector-cup-of-coffee-on-glass-table-on-white-background.jpg" alt="coffee" />
                        <div className="product__description">
                            <div className="info">
                                <div className="main">
                                    <h6>Coffee Latte</h6>
                                    <div>
                                        <span className="info__price">10$</span>
                                        <span className="line"></span>
                                        <span className="info__inStock">In Stock</span>
                                    </div>
                                </div>
                                <p className="totalProductPrice">
                                    119$
                                </p>
                            </div>
                            <div className="product-control">
                                <div className="quantity" >
                                    <button className="plus">—</button>
                                    <input className="quantityInp" defaultValue={1} min={1} type="number" />
                                    <button className="minus">+</button>
                                </div>
                                <button className="deleteFromCart" >
                                    <FontAwesomeIcon icon={faTrash} />
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cart;