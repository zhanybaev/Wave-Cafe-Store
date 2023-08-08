import { AnyAction } from "@reduxjs/toolkit"
import { Dispatch } from "react"
import { IProduct } from "../../types/productTypes";
import { ICartProduct } from "../../types/cartTypes";
import { calcSubPrice, calcTotalPrice, checkInCart } from "../../utils/functions";
import { getCart } from "../slices/cartSlice";

export const addProductToCart = (productItem:IProduct) => {
    let cart = JSON.parse(localStorage.getItem("Wave Cafe cart") || 'false');
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    const newProduct:ICartProduct = {
        item: productItem,
        count: 1,
        subPrice: 0,
    };
    if (checkInCart(productItem)) {
        cart.products = cart.products.filter((elem:ICartProduct) => {
          return elem.item.id !== productItem.id;
        });
    } else {
        cart.products.push(newProduct);
    }
    newProduct.subPrice = calcSubPrice(newProduct);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("Wave Cafe cart", JSON.stringify(cart));
}

export const getCartProducts = (dispatch: Dispatch<AnyAction>) => {
    let cart = JSON.parse(localStorage.getItem("Wave Cafe cart") || 'false');
    if (!cart) {
      cart = {
        products: [],
        totalPrice:0
      };
    }
    dispatch(getCart(cart))
}

export const deleteProductFromCart = (dispatch: Dispatch<AnyAction>, id:string) => {
    let cart = JSON.parse(localStorage.getItem("Wave Cafe cart") || "false");
    cart.products = cart.products.filter((elem:ICartProduct) => elem.item.id !== id);
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("Wave Cafe cart", JSON.stringify(cart));
    dispatch(getCart(cart));
}

export const changeProductCount = (dispatch: Dispatch<AnyAction>, id:string, count:number)=>{
    let cart = JSON.parse(localStorage.getItem("Wave Cafe cart") || 'false');
    cart.products = cart.products.map((elem:ICartProduct) => {
      if (elem.item.id === id) {
        elem.count = count;
        elem.subPrice = calcSubPrice(elem);
      }
      return elem;
    });
    cart.totalPrice = calcTotalPrice(cart.products);
    localStorage.setItem("Wave Cafe cart", JSON.stringify(cart));
    dispatch(getCart(cart));
}