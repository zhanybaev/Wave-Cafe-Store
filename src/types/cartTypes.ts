import { IProduct } from "./productTypes"

export interface ICart{
    products:ICartProduct[],
    totalPrice:number
}

export interface ICartProduct{
    item: IProduct,
    count: number,
    subPrice: number
}