import { useEffect, useState } from 'react';
import { useAppDispatch } from '../store';
import { getAllProducts } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes';
import Card from './Card';
import Modal from '../components/Modal'

interface IListProps{
    products: IProduct[],
    API:string,
}

const List = ({products, API}:IListProps) => {
    const dispatch=useAppDispatch()
    const [showModal, setShowModal]=useState(false)
    
    useEffect(()=>{
        getAllProducts(dispatch, API)
    }, [])

    return ( 
        <section className='list' >
            {products.map((item) =>(
                <Card API={API} setShowModal={setShowModal} key={item.id} item={item} />
            ))}
            <Modal setShowModal={setShowModal} showModal={showModal} />
        </section >
    );
};

export default List;