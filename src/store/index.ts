import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ProductSlice } from "./slices/productSlice";
import { UserSlice } from "./slices/userSlice";

export const store = configureStore({
    reducer:{
        product:ProductSlice.reducer,
        user:UserSlice.reducer
    }
})

export const useAppDispatch:()=>typeof store.dispatch=useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector