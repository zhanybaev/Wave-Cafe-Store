import List from './List';
import { useAppSelector } from '../store';
import { SPECIAL_ITEMS_API } from '../utils/consts';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { checkAdmin } from '../utils/functions';
const sandwichIcon = require('../assets/icons/sandwich-svgrepo-com.svg') 

const SpecialItems = () => {
    const products = useAppSelector(state=>state.product.products)
    const user = useAppSelector(state=>state.auth.user)
    const admin = checkAdmin(user?.email || '')
    
    return (
        <section className='menu'>
            {
                admin ? 
                    <div className='navAdd' >
                    <Link to="/add">
                        <div className="icons">
                            <FontAwesomeIcon style={{color:'white'}} icon={faPlus} />
                            <img width={35} src={sandwichIcon.default} alt='coffee icon' />
                        </div>
                        <span>Add special item</span>
                    </Link>
                    </div>                    
                : 
                    <></>
            }
            <List products={products} API={SPECIAL_ITEMS_API} />
        </section>
    );
};

export default SpecialItems;