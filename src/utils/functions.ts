import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllProducts } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes'
import { PRODUCTS_API } from './consts';


export const addProduct = async(product:IProduct, dispatch:Dispatch)=>{
    await axios.post(PRODUCTS_API, product);
    await getAllProducts(dispatch)
}

export const deleteProduct = async(id:string, dispatch:Dispatch)=>{
    await axios.delete(`${PRODUCTS_API}/${id}`)
    await getAllProducts(dispatch)
}

export const editProduct = async (id:string, updatedProduct:IProduct ,dispatch:Dispatch)=>{
    await axios.patch(`${PRODUCTS_API}/${id}`, updatedProduct)
    await getAllProducts(dispatch)
}