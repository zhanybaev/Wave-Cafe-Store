import { createSlice } from "@reduxjs/toolkit"
import { Product } from "../../types/productTypes"

interface ProductState{
    products:Product[]
}

const initialState:ProductState={
    products:[]
}

export const ProductSlice=createSlice({
    name:'products',
    initialState, 
    reducers:{
        getProducts:(state, action)=>{
            return {
                ...state, 
                products: action.payload
            }
        }
    }
})
export default ProductSlice.reducer;
export const { getProducts }=ProductSlice.actions