import { createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../types/userTypes"

interface IAuthState{
    user:IUser|null,
    error:string
}

const initialState:IAuthState={
    user:null,
    error:''
}

export const AuthSlice=createSlice({
    name:'auth',
    initialState, 
    reducers:{
        setUser:(state, action)=>{
            return {
                ...state, 
                user: action.payload
            }
        },
        removeUser:(state, action)=>{
            return {
                ...state,
                user: action.payload
            }
        },
        setAuthError:(state, action)=>{
            return {
                ...state,
                error:action.payload
            }
        }
    }
})
export default AuthSlice.reducer;
export const { setUser, removeUser, setAuthError }=AuthSlice.actions