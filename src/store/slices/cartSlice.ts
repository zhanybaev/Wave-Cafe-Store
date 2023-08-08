import { createSlice } from "@reduxjs/toolkit"
import { ICart } from "../../types/cartTypes"

interface ICartState{
    cart:ICart | {}
}

const initialState:ICartState={
    cart:{}
}

export const CartSlice=createSlice({
    name:'cart',
    initialState, 
    reducers:{
        getCart:(state, action)=>{
            return {
                ...state, 
                cart: action.payload
            }
        }
    }
})
export default CartSlice.reducer;
export const { getCart }=CartSlice.actions