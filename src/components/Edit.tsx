import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { getOneProduct } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes';
import { editProduct } from '../utils/functions';

const Edit = () => {
    const product = useAppSelector(state=>state.product.product)
    const { id } = useParams()
    const dispatch=useAppDispatch()
    const [editedProduct, setEditedProduct]=useState<IProduct | null>(product);
    
    const handleInp = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const obj={
            ...product,
            [e.target.name]:e.target.value
        }
        setEditedProduct(obj)
    }

    console.log(product);
    useEffect(()=>{
        if(id){
            getOneProduct(dispatch, id)
        }
    }, [])

    return (
        <div>
            <input type="text" name='title' placeholder='title' onChange={handleInp} />
            <input type="number" name='price' placeholder='price' onChange={handleInp} />
            <input type="text" name='image' placeholder='image' onChange={handleInp} />
            <input type="text" name='description' placeholder='description' onChange={handleInp} />
            <button onClick={()=>{
                if(id){
                    editProduct(id, editedProduct, dispatch)
                }
            }} >Update</button>
        </div>
    );
};

export default Edit;