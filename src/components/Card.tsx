import { useAppDispatch } from '../store';
import { IProduct } from '../types/productTypes';
import { deleteProduct } from '../utils/functions';
import { DRINKS_API } from '../utils/consts';
import CartButton from './CartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getOneProduct } from '../store/actions/product.action';

interface CardProps{
    item: IProduct,
    API:string,
    setShowModal(showModal:boolean):void
};

const Card = ({item, setShowModal, API} :CardProps):JSX.Element => {
    const dispatch=useAppDispatch()
    // ! Here will be data from firebases
    const user:string = 'admin'

    const goToEdit = (id:string):void => {
        getOneProduct(dispatch, API, id)
        setShowModal(true)
        const html = document.querySelector('html');
        if (html) {
            html.style.overflow = 'hidden';
        }
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