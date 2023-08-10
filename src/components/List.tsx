import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { getAllProducts } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes';
import Card from './Card';
import Modal from '../components/Modal'
import Warning from './Warning';

interface IListProps{
    products: IProduct[],
    API:string,
}

const List = ({products, API}:IListProps) => {
    const { error, loading } = useAppSelector(state=>state.product)
    const [showModal, setShowModal]=useState(false)
    const dispatch=useAppDispatch()
    
    useEffect(()=>{
        getAllProducts(dispatch, API)
    }, [])

    return ( 
        <section className='list' >
            {
                error ? <Warning message={error} /> : null
            }
            {
                loading ? <Warning message='Loading...'/> : products.map(item=> <Card API={API} setShowModal={setShowModal} key={item.id} item={item}/>)
            }
            <Modal setShowModal={setShowModal} showModal={showModal} />
        </section >
    );
};

export default List;