import React, { useState } from 'react';
import List from './List';
import { useAppSelector } from '../store';
import { DRINKS_API } from '../utils/consts';
import FilterBar from './FilterBar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
const coffeeIcon = require('../assets/images/coffee-pot.svg') 

const Menu = () => {
    const products = useAppSelector(state=>state.product.products)
    const [type, setType] = useState('Iced Coffee')
    const user:string = 'admin'
    
    const filteredProducts = products.filter(item=>{
        return item.type===type
    })
    return (
        <section className='menu'>
            {
                user==='admin' ? 
                    <div className='navAdd' >
                    <Link to="/add">
                        <div className="icons">
                            <FontAwesomeIcon style={{color:'white'}} icon={faPlus} />
                            <img width={35} src={coffeeIcon.default} alt='coffee icon' />
                        </div>
                        <span>Add beverage</span>
                    </Link>
                    </div>                    
                : 
                    <></>
            }
            <FilterBar type={type} setType={setType} />
            <List products={filteredProducts} API={DRINKS_API} />
        </section>
    );
};

export default Menu;