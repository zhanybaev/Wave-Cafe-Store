import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { getOneProduct } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes';
import { editProduct } from '../utils/functions';
import { DRINKS_API } from '../utils/consts';

const Edit = () => {
    const product = useAppSelector(state=>state.product.product)
    const { id } = useParams()
    const dispatch=useAppDispatch()
    const navigate = useNavigate()
    const [editedProduct, setEditedProduct] = useState({
        title:product.title,
        price: product.price,
        image: product.image,
        description: product.description,
        type:product.type
    })

    const saveEdited = (id:string) => {
        const obj:IProduct = {
            ...editedProduct,
            id:id
        }
        editProduct(id, DRINKS_API, obj, dispatch)
        navigate('/')
    }

    useEffect(()=>{
        if(id){
            getOneProduct(dispatch, DRINKS_API, id)
        }
    }, [id])
    
    console.log(editedProduct);

    return (
        <div>
            <input placeholder='title' value={editedProduct.title} onChange={(e)=>setEditedProduct({...editedProduct, title:e.target.value})} />
            <input type="number" placeholder='price' value={editedProduct.price} onChange={(e)=>setEditedProduct({...editedProduct, price:+e.target.value})} />
            <input placeholder='image' value={editedProduct.image} onChange={(e)=>setEditedProduct({...editedProduct, image:e.target.value})} />
            <input placeholder='description' value={editedProduct.description} onChange={(e)=>setEditedProduct({...editedProduct, description:e.target.value})}/>
            <input placeholder='type' value={editedProduct.type} onChange={(e)=>setEditedProduct({...editedProduct, type:e.target.value})}/>
            <button onClick={()=>{
                if(id){
                    saveEdited(id)
                }
            }} >Update</button>
        </div>
    );
};

export default Edit;