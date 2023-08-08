import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ICartProduct } from '../types/cartTypes';
import { changeProductCount, deleteProductFromCart } from '../store/actions/cart.action';
import { useDispatch } from 'react-redux';

interface ICartProductProps{
    product:ICartProduct
}

const CartProduct = ({product}:ICartProductProps) => {
    const dispatch = useDispatch()

    const increaseCount = () =>{
        changeProductCount(dispatch, product.item.id, product.count+1)
    }

    const decreaseCount = () =>{
        changeProductCount(dispatch, product.item.id, product.count-1)
    }
    return (
        <div className="product">
            <img loading="lazy" src={product.item.image} alt="coffee" />
            <div className="product__description">
                <div className="info">
                    <div className="main">
                        <h6>{product.item.title}</h6>
                        <div>
                            <span className="info__price">{product.item.price}$</span>
                            <span className="line"></span>
                            <span className="info__inStock">In Stock</span>
                        </div>
                    </div>
                    <p className="totalProductPrice">
                        {product.subPrice}$
                    </p>
                </div>
                <div className="product-control">
                    <div className="quantity" >
                        <span onClick={decreaseCount} className='minus'>—</span>
                        <span>{product.count}</span>
                        <span onClick={increaseCount} className='plus'>+</span>
                    </div>
                    <button onClick={()=>deleteProductFromCart(dispatch, product.item.id)} className="deleteFromCart" >
                        <FontAwesomeIcon icon={faTrash} />
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;