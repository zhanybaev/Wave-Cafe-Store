import { AnyAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { removeUser, setUser, setAuthError } from '../slices/authSlice';
import { IUser } from "../../types/userTypes";

export const signIn = (dispatch: Dispatch<AnyAction>, userObj:IUser) => {
    dispatch(setUser(userObj))
}

export const logOut = (dispatch: Dispatch<AnyAction>) => {
    dispatch(removeUser(null))
}

export const setError = (dispatch:Dispatch<AnyAction>, error:string) => {
    dispatch(setAuthError(error))
}