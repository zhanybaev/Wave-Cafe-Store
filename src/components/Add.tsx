import React, { useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useAppDispatch } from '../store';
import { addProduct } from '../utils/functions';
import { DRINKS_API } from '../utils/consts';
import { IProduct } from '../types/productTypes';
import SnackBar from './SnackBar';

const Add = () => {
    const dispatch=useAppDispatch()
    const id = uuidv4();
    const [showBar, setShowBar] = useState(false)
    const [text, setText] = useState('success')

    const titleRef = useRef<HTMLInputElement>(null)
    const typeRef = useRef<HTMLInputElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const imgRef = useRef<HTMLInputElement>(null)
    const descrRef = useRef<HTMLInputElement>(null)

    const resetValues = () =>{
        if(titleRef.current && typeRef.current && priceRef.current && imgRef.current && descrRef.current){
            titleRef.current.value=''
            typeRef.current.value=''
            priceRef.current.value=''
            imgRef.current.value=''
            descrRef.current.value=''
        } 
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
                id:id
            }
            try {
                await addProduct(obj, DRINKS_API, dispatch);               
                resetValues()
            } catch (error) {
                const result:string = (error as Error).message;            
                setText(result)
            }
        }
        setShowBar(true)
    }
    
    return (
        <div className='addForm'>
            <form onSubmit={formHandler}>
                <input defaultValue={''} ref={titleRef} required placeholder='title'/>
                <input ref={typeRef} required placeholder='type'/>
                <input ref={priceRef} required type="number" placeholder='price'/>
                <input ref={imgRef} required placeholder='image'/>
                <input ref={descrRef} required placeholder='description'/>
                <button type='submit'>Add</button>
            </form>
            <SnackBar
                showBar={showBar}
                text={text}     
                type={text==='success' ? 'success' : 'error' } 
            /> 
        </div>
    );
};

export default Add;