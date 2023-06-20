import { createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../types/productTypes"

interface ProductState{
    products:IProduct[],
    product:IProduct
}

const initialState:ProductState={
    products:[],
    product:{
        title:'',
        id: '',
        image: '',
        description:'',
        price: 0
    }
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
        },
        getProduct:(state, action)=>{
            return {
                ...state,
                product: action.payload
            }
        }
    }
})
export default ProductSlice.reducer;
export const { getProducts, getProduct }=ProductSlice.actions