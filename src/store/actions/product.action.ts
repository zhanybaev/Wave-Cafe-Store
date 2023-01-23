import { AnyAction } from "@reduxjs/toolkit"
import axios from "axios"
import { Dispatch } from "react"
import { getProducts } from "../slices/productSlice"

export const getAllProducts = async (dispatch: Dispatch<AnyAction>) => {
    try {
        let res = await axios('http://localhost:8000/products')
        dispatch(getProducts(res.data))
    } catch (error) {
        console.error(error)
    }
}