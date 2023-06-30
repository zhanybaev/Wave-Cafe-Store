import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import { getProducts, getProduct } from "../slices/productSlice"

export const getAllProducts = async (dispatch: Dispatch<AnyAction>, API:string) => {
    try {
        let res = await axios(API)
        dispatch(getProducts(res.data))
    } catch (error) {
        console.error(error)
    }
}

export const getOneProduct = async(dispatch: Dispatch<AnyAction>, API:string,  id:string) => {
    try {
        let res = await axios(`${API}/${id}`)
        dispatch(getProduct(res.data))
    } catch (error) {
        console.error(error)
    }
}