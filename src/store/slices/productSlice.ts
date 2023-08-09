import { createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../types/productTypes"

interface ProductState{
    products:IProduct[],
    product:IProduct,
    error: string | null,
    loading: boolean
}

const initialState:ProductState={
    products:[],
    product:{
        title:'',
        id: '',
        image: '',
        description:'',
        price: 0,
        type:''
    },
    error:null,
    loading:true
}

export const ProductSlice=createSlice({
    name:'products',
    initialState, 
    reducers:{
        getProducts:(state, action)=>{
            return {
                ...state, 
                products: action.payload,
                error:'',
                loading:false
            }
        },
        getProduct:(state, action)=>{
            return {
                ...state,
                product: action.payload,
                error:'',
                loading:false
            }
        },
        setError:(state, action)=>{
            return {
                ...state,
                error: action.payload,
                loading:false,
                products:[]
            }
        },
        setLoading:(state, action)=>{
            return {
                ...state,
                loading: action.payload
            }
        }
    }
})
export default ProductSlice.reducer;
export const { getProducts, getProduct, setError, setLoading }=ProductSlice.actions