import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import { getProducts, getProduct, setError, setLoading } from "../slices/productSlice"
import { IProduct } from "../../types/productTypes"

export const setFetchError = (dispatch: Dispatch<AnyAction>, message:string) =>{
    dispatch(setError(message))
}

export const getAllProducts = async (dispatch: Dispatch<AnyAction>, API:string) => {
    try {
        dispatch(setLoading(true))
        let res = await axios(API)
        dispatch(getProducts(res.data))
    } catch (error) {
        const errorName:string = (error as Error).name;
        if(errorName==="AxiosError")setFetchError(dispatch, "Failed to fetch data, refresh the page or try later")
    }
}

export const getOneProduct = async(dispatch: Dispatch<AnyAction>, API:string,  id:string) => {
    try {
        dispatch(setLoading(true))
        let res = await axios(`${API}/${id}`)
        dispatch(getProduct(res.data))
    } catch (error) {
        const errorName:string = (error as Error).name;
        if(errorName==="AxiosError")setFetchError(dispatch, "Failed to fetch data, refresh the page or try later")
    }
}

export const addProduct = async(product:IProduct, API:string, dispatch:Dispatch<AnyAction>)=>{
    await axios.post(API, product);
    await getAllProducts(dispatch, API)
}

export const deleteProduct = async(id:string, API:string, dispatch:Dispatch<AnyAction>)=>{
    await axios.delete(`${API}/${id}`)
    await getAllProducts(dispatch, API)
}

export const editProduct = async (id:string, API:string, updatedProduct:IProduct ,dispatch:Dispatch<AnyAction>)=>{
    await axios.patch(`${API}/${id}`, updatedProduct)
    await getAllProducts(dispatch, API)
}