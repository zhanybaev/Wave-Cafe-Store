import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { getAllProducts } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes';
import Card from './Card';

const List = () => {
    const products = useAppSelector(state=>state.product.products)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        getAllProducts(dispatch)
    }, [])

    return (
        <div>
            {products.map((item) =>(
                <Card item={item} />
            ))}
        </div>
    );
};

export default List;