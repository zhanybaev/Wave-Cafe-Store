import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { getAllProducts } from '../store/actions/product.action';

const List = () => {
    const products = useAppSelector(state=>state.product.products)
    const dispatch=useAppDispatch()
    useEffect(()=>{
        getAllProducts(dispatch)
    }, [])

    return (
        <div>
            {products.map(item=>(
                <div>
                    {item.title}
                </div>
            ))}
        </div>
    );
};

export default List;