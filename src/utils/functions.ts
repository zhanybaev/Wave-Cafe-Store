import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllProducts } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes'


export const addProduct = async(product:IProduct, API:string, dispatch:Dispatch)=>{
    await axios.post(API, product);
    await getAllProducts(dispatch, API)
}

export const deleteProduct = async(id:string, API:string, dispatch:Dispatch)=>{
    await axios.delete(`${API}/${id}`)
    await getAllProducts(dispatch, API)
}

export const editProduct = async (id:string, API:string, updatedProduct:IProduct ,dispatch:Dispatch)=>{
    await axios.patch(`${API}/${id}`, updatedProduct)
    await getAllProducts(dispatch, API)
}