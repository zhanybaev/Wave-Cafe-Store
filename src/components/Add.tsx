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
    const typeRef = useRef<HTMLSelectElement>(null)
    const priceRef = useRef<HTMLInputElement>(null)
    const imgRef = useRef<HTMLInputElement>(null)
    const descrRef = useRef<HTMLTextAreaElement>(null)

    const resetValues = () =>{
        if(titleRef.current && typeRef.current && priceRef.current && imgRef.current && descrRef.current){
            titleRef.current.value=''
            typeRef.current.value='Hot Coffee'
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
                const result:string = (error as Error).name;
                const errorMessage = result==="AxiosError"?'Request Failed' : "Something went wrong, try later"
                setText(errorMessage)
            }
        }
        setShowBar(true)
        setTimeout(()=>{
            setShowBar(false)
        }, 5000)
    }
    
    return (
        <div className='addForm'>
            <div className="addForm__text">
                <h2>Add Coffee</h2>
                <p>
                    In our online coffee house app, we have implemented strict permissions and access controls to ensure a seamless and secure experience for our users. One such restriction is that only authorized administrators have the permission to add new coffee items to our menu.
                </p>
            </div>
            <form onSubmit={formHandler}>
                <input defaultValue={''} ref={titleRef} required placeholder='Title'/>
                <select ref={typeRef}>
                    <option value="Hot Coffee">Hot Coffee</option>
                    <option value="Iced Coffee">Iced Coffee</option>
                    <option value="Fruit Juice">Fruit Juice</option>
                </select>
                <input ref={priceRef} required type="Number" placeholder='Price'/>
                <input ref={imgRef} required placeholder='Image'/>
                <textarea rows={6} ref={descrRef} required placeholder='Description'></textarea>
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