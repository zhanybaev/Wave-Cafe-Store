import React, { useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { editProduct } from '../utils/functions';
import { DRINKS_API, SPECIAL_ITEMS_API } from '../utils/consts';
import { IProduct } from '../types/productTypes';
import SnackBar from './SnackBar';
import Form from './Form';

interface IEditProps{
    closeModal():void
}

const Edit = ({closeModal}:IEditProps) => {
    const product = useAppSelector(state=>state.product.product)
    const dispatch=useAppDispatch()
    const [showBar, setShowBar] = useState(false)
    const [text, setText] = useState('success')

    const titleRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const imgRef = useRef<HTMLInputElement>(null)
    const descrRef = useRef<HTMLTextAreaElement>(null)

    if(titleRef.current && typeRef.current && priceRef.current && imgRef.current && descrRef.current){
        titleRef.current.value=product.title
        typeRef.current.value=product.type
        priceRef.current.value=`${product.price}`
        imgRef.current.value=product.image
        descrRef.current.value=product.description
    } 

    const formHandler = async(e:React.FormEvent)=>{
        e.preventDefault()
        if(titleRef.current && typeRef.current && priceRef.current && imgRef.current && descrRef.current){
            const obj:IProduct ={
                title: titleRef.current.value,
                type: typeRef.current.value,
                price:+priceRef.current.value,
                image:imgRef.current.value,
                description:descrRef.current.value,
                id: product.id
            }
            const PATCH_API = typeRef.current.value === "Special Item" ? SPECIAL_ITEMS_API : DRINKS_API 
            try {
                await editProduct(product.id, PATCH_API, obj, dispatch);  
            } catch (error) {
                const result:string = (error as Error).name;
                const errorMessage = result==="AxiosError"?'Request Failed' : "Something went wrong, try later"
                setText(errorMessage)
            }
        }
        setShowBar(true)
        setTimeout(()=>{
            closeModal()
            setShowBar(false)
        }, 500)
    }
    
    return (
        <div className='editForm'>
            <Form 
                btnText={"Save Changes"}
                formHandler={formHandler} 
                titleRef={titleRef} 
                typeRef={typeRef} 
                priceRef={priceRef}
                imgRef={imgRef} 
                descrRef={descrRef} />
            <SnackBar showBar={showBar} text={text} type={text==='success' ? 'success' : 'error' }/> 
        </div>
    );
};

export default Edit;