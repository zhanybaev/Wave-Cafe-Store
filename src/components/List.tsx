import { useEffect } from 'react';
import { useAppDispatch } from '../store';
import { getAllProducts } from '../store/actions/product.action';
import Card from './Card';
import { IProduct } from '../types/productTypes';

interface IListProps{
    products: IProduct[],
    API:string
}

const List = ({products, API}:IListProps) => {
    const dispatch=useAppDispatch()
    useEffect(()=>{
        getAllProducts(dispatch, API)
    }, [])

    return ( 
        <section className='list' >
            {products.map((item) =>(
                <Card key={item.id} item={item} />
            ))}
        </section >
    );
};

export default List;