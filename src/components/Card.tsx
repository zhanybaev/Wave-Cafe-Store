import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { IProduct } from '../types/productTypes';
import { deleteProduct } from '../utils/functions';
// import { getOneProduct } from '../store/actions/product.action';
import { DRINKS_API } from '../utils/consts';

interface CardProps{
    item: IProduct;
};

const Card = (props:CardProps):JSX.Element => {
    const { item } = props;
    const dispatch=useAppDispatch()
    const navigate=useNavigate()

    const goToEdit = (id:string):void => {
        navigate(`/edit/${id}`)
        // getOneProduct(dispatch, id)
    }

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
                                    <button className="btn" onClick={()=>deleteProduct(item.id, DRINKS_API, dispatch)}>Delete</button>
                                    <button className="btn" onClick={()=>goToEdit(item.id)} >Edit</button>
                                {/* </>): */}
                                {/* <></> */}
                            {/* } */}
                        </p>
                    </div>
                </div>
    );
};

export default Card;