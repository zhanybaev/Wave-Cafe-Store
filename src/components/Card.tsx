import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../store';
import { IProduct } from '../types/productTypes';
import { deleteProduct } from '../utils/functions';
import { DRINKS_API } from '../utils/consts';
import CartButton from './CartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

interface CardProps{
    item: IProduct;
};

const Card = (props:CardProps):JSX.Element => {
    const { item } = props;
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
    // ! Here will be data from firebases
    const user:string = 'notAdmin'

    const goToEdit = (id:string):void => {
        navigate(`/edit/${id}`)
        // getOneProduct(dispatch, id)
    }

    return (
        <div key={item.id} className="card">
            <img className="card__image" src={item.image} alt="coffee" />
            <div className="productInfo">
                <div className="card__title" style={{display:'flex'}}>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
                <div className="description">
                    <p>{item.description} </p>
                    <div className="action">
                        { user === 'admin' 
                            ? 
                                <>
                                    <button className="action-btn" onClick={()=>deleteProduct(item.id, DRINKS_API, dispatch)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                        <span>Delete</span>
                                    </button>
                                    <button className="action-btn" onClick={()=>goToEdit(item.id)}>
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                        <span>Edit</span>
                                    </button>
                                </>
                            :
                                <>
                                    <CartButton />
                                </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;