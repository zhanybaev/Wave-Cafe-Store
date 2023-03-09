import { Link } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { IProduct } from '../types/productTypes';
import { deleteProduct } from '../utils/functions';

interface CardProps{
    item: IProduct;
};

const Card = (props:CardProps):JSX.Element => {
    const { item } = props;
    const dispatch=useAppDispatch()

    return (
        <div key={item.id} className="product">
                    <Link to={`/detail/${item.id}`} style={{textDecoration:'none'}}>
                        <img className="coffee_image" src={item.image} alt="coffe" />
                    </Link>
                    <div className="productInfo">
                        <div className="name_price" style={{display:'flex'}}>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                        </div>
                        <p id="description">{item.description} <br />
                            {/* {currentUser?.email==='zhanybaev1211@gmail.com'?  */}
                                {/* (<> */}
                                    <button className="btn" onClick={()=>deleteProduct(item.id, dispatch)}>Delete</button>
                                    <Link to={`/edit/${item.id}`} style={{textDecoration:'none'}}>
                                        <button className="btn">Edit</button>
                                    </Link>
                                {/* </>): */}
                                {/* <></> */}
                            {/* } */}
                        </p>
                    </div>
                </div>
    );
};

export default Card;