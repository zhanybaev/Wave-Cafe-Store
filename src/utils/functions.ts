import { IProduct } from '../types/productTypes'
import { ICartProduct } from "../types/cartTypes"

export const checkAdmin = (email:string)=>{
    return email===process.env.REACT_APP_ADMIN
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