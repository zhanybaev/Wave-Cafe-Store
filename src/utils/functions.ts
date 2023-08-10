import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { getAllProducts } from '../store/actions/product.action';
import { IProduct } from '../types/productTypes'
import { logOut, setError, signIn } from "../store/actions/auth.action";
import { IUser } from "../types/userTypes";
import { app } from "../fire";
import { ICartProduct } from "../types/cartTypes";

const auth = app.auth();

type NavigateFunction = (location: string) => void;

export const signUp = (dispatch:Dispatch, email:string, password:string, navigate:NavigateFunction) =>{
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
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

export const handleSignOut = (dispatch:Dispatch)=>{
    signOut(auth)
    .then(()=>{
        logOut(dispatch)
    })
} 

export const authListener = (dispatch:Dispatch) => {
    onAuthStateChanged(auth, (user)=>{
        if(user?.email){
            const userObj:IUser = {
                userName: user.email,
                email: user.email
            }
            signIn(dispatch, userObj)
            return;
        }
        if(!user)logOut(dispatch);
    })
}

export const checkAdmin = (email:string)=>{
    return email===process.env.REACT_APP_ADMIN
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

export const getDeliveryDate = () =>{
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const date = new Date()
    const month = monthNames[date.getMonth()]
    const day = date.getDate() + 1
    const year = date.getFullYear()
    return `${day} ${month} ${year}`
}

export const checkInCart = (productItem:IProduct)=>{
    let cart = JSON.parse(localStorage.getItem("Wave Cafe cart") || "false");
    if(!cart)return false
    return !(cart.products.every((elem:ICartProduct)=>elem.item.id !== productItem.id))
}

export function calcSubPrice(product:ICartProduct) {
    return product.count * product.item.price;
}

export function calcTotalPrice(products:ICartProduct[]) {
    let totalPrice = 0;
    products.forEach((item) => {
      totalPrice += item.subPrice;
    });
    return totalPrice;
}