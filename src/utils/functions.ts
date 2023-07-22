import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllProducts } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes'
import { setError, signIn } from "../store/actions/auth.action";
import { IUser } from "../types/userTypes";
import { app } from "../fire";

const auth = app.auth();

type NavigateFunction = (location: string) => void;

export const signUp = (dispatch:Dispatch, email:string, password:string, navigate:NavigateFunction) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        const user:IUser = {
            userName: `user ${email}`,
            email:email
        }
        signIn(dispatch, user)
    })
    .then(()=>{
        navigate('/')
    })
    .catch((error) => {
        const text = error.message.replace("Firebase:", "").replace(/ *\([^)]*\) */g, "")
        setError(dispatch, text)
    });
}

export const logIn = (dispatch:Dispatch, email:string, password:string, navigate:NavigateFunction) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        const user:IUser = {
            userName: `user ${email}`,
            email:email
        }
        signIn(dispatch, user)
    })
    .then(()=>{
        navigate('/')
    })
    .catch((error) => {
        const text = error.message.replace("Firebase:", "")
        setError(dispatch, text)
  });
}


export const addProduct = async(product:IProduct, API:string, dispatch:Dispatch)=>{
    await axios.post(API, product);
    await getAllProducts(dispatch, API)
}

export const deleteProduct = async(id:string, API:string, dispatch:Dispatch)=>{
    await axios.delete(`${API}/${id}`)
    await getAllProducts(dispatch, API)
}

export const editProduct = async (id:string, API:string, updatedProduct:IProduct ,dispatch:Dispatch)=>{
    await axios.patch(`${API}/${id}`, updatedProduct)
    await getAllProducts(dispatch, API)
}