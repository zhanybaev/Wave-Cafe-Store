import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import { getProducts, getProduct, setError, setLoading } from "../slices/productSlice"

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
