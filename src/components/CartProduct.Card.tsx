import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CartProduct = () => {
    return (
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
                        <button className="minus">—</button>
                        <input className="quantityInp" defaultValue={1} min={1} type="number" />
                        <button className="plus">+</button>
                    </div>
                    <button className="deleteFromCart" >
                        <FontAwesomeIcon icon={faTrash} />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;