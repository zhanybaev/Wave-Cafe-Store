import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../types/userTypes"

interface ProductState{
    user:IUser|null,
}

const initialState:ProductState={
    user:null
}

export const UserSlice=createSlice({
    name:'user',
    initialState, 
    reducers:{
        setUser:(state, action)=>{
            return {
                ...state, 
                products: action.payload
            }
        },
        removeUser:(state, action)=>{
            return {
                ...state,
                product: action.payload
            }
        }
    }
})
export default UserSlice.reducer;
export const { setUser, removeUser }=UserSlice.actions