import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllProducts } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes'
import { signIn } from "../store/actions/auth.action";
import { IUser } from "../types/userTypes";
import { app } from "../fire";

const auth = app.auth();

export const signUp = (dispatch:Dispatch, email:string, password:string) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        const user:IUser = {
            userName: `user ${email}`,
            email:email
        }
        signIn(dispatch, user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}

export const logIn = (dispatch:Dispatch, email:string, password:string) => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        const user:IUser = {
            userName: `user ${email}`,
            email:email
        }
        signIn(dispatch, user)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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