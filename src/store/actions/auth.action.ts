import { AnyAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { removeUser, setUser, setAuthError } from '../slices/authSlice';
import { IUser } from "../../types/userTypes";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../../fire";

const auth = app.auth();

type NavigateFunction = (location: string) => void;

export const signUp = (dispatch:Dispatch<AnyAction>, email:string, password:string, navigate:NavigateFunction) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
        const user:IUser = {
            userName: `user ${email}`,
            email:email
        }
        dispatch(setUser(user))
    })
    .then(()=>{
        navigate('/')
    })
    .catch((error) => {
        const text = error.message.replace("Firebase:", "").replace(/ *\([^)]*\) */g, "")
        dispatch(setAuthError(text))
    });
}

export const logIn = (dispatch:Dispatch<AnyAction>, email:string, password:string, navigate:NavigateFunction) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {
        const user:IUser = {
            userName: `user ${email}`,
            email:email
        }
        dispatch(setUser(user))
    })
    .then(()=>{
        navigate('/')
    })
    .catch((error) => {
        const text = error.message.replace("Firebase:", "")
        dispatch(setAuthError(text))
  });
}

export const handleSignOut = (dispatch:Dispatch<AnyAction>)=>{
    signOut(auth)
    .then(()=>{
        dispatch(removeUser(null))
    })
} 

export const authListener = (dispatch:Dispatch<AnyAction>) => {
    onAuthStateChanged(auth, (user)=>{
        if(user?.email){
            const userObj:IUser = {
                userName: user.email,
                email: user.email
            }
            dispatch(setUser(userObj))
            return;
        }
        if(!user)dispatch(removeUser(null));
    })
}