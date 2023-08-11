import { useAppDispatch, useAppSelector } from '../store';
import { IProduct } from '../types/productTypes';
import { checkAdmin } from '../utils/functions';
import { DRINKS_API } from '../utils/consts';
import CartButton from './CartButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteProduct, getOneProduct } from '../store/actions/product.action';

interface CardProps{
    item: IProduct,
    API:string,
    setShowModal(showModal:boolean):void
};

const Card = ({item, setShowModal, API} :CardProps):JSX.Element => {
    const dispatch=useAppDispatch()
    const user = useAppSelector(state=>state.auth.user)
    const admin = checkAdmin(user?.email || '')

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
            <img className="card__image" loading='lazy' src={item.image} alt="coffee" />
            <div className="productInfo">
                <div className="card__title" style={{display:'flex'}}>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                </div>
                <div className="description">
                    <p>{item.description} </p>
                    <div className="action">
                        { admin
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
                                { user?.email ? <CartButton item={item} /> : <></>}
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;