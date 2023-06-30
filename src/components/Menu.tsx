import React, { useState } from 'react';
import List from './List';
import { useAppSelector } from '../store';
import { DRINKS_API } from '../utils/consts';
import FilterBar from './FilterBar';

const Menu = () => {
    const products = useAppSelector(state=>state.product.products)
    const [type, setType] = useState('Iced Coffee')

    return (
        <section className='menu'>
            <FilterBar type={type} setType={setType} />
            <List products={products} API={DRINKS_API} />
        </section>
    );
};

export default Menu;