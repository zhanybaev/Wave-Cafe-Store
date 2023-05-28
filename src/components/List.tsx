import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { getAllProducts } from '../store/actions/product.action';
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
                <Card key={item.id} item={item} />
            ))}
        </div>
    );
};

export default List;