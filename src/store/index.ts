import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProductSlice } from "./slices/productSlice";
import { AuthSlice } from "./slices/authSlice";
import { CartSlice } from "./slices/cartSlice";

export const store = configureStore({
    reducer:{
        product:ProductSlice.reducer,
        auth:AuthSlice.reducer,
        cart:CartSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector