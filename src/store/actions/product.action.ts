import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import { PRODUCTS_API } from "../../utils/consts"
import { getProducts, getProduct } from "../slices/productSlice"

export const getAllProducts = async (dispatch: Dispatch<AnyAction>) => {
    try {
        let res = await axios(PRODUCTS_API)
        dispatch(getProducts(res.data))
    } catch (error) {
        console.error(error)
    }
}

export const getOneProduct = async(dispatch: Dispatch<AnyAction>, id:string) => {
    try {
        let res = await axios(`${PRODUCTS_API}/${id}`)
        dispatch(getProduct(res.data))
    } catch (error) {
        console.error(error)
    }
}