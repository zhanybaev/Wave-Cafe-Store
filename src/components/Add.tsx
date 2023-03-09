import React, { useId, useState } from 'react';
import { useAppDispatch } from '../store';
import { addProduct } from '../utils/functions';

const Add = () => {
    const [product, setProduct] = useState({
        id: useId(),
        title:'',
        price:0,
        image: '',
        description:'',
    })
    const dispatch=useAppDispatch()
    const handleInp = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const obj={
            ...product,
            [e.target.name]:e.target.value
        }
        setProduct(obj)
    }
    
    return (
        <div>
            <input type="text" name='title' placeholder='title' onChange={handleInp} />
            <input type="number" name='price' placeholder='price' onChange={handleInp} />
            <input type="text" name='image' placeholder='image' onChange={handleInp} />
            <input type="text" name='description' placeholder='description' onChange={handleInp} />
            <button onClick={()=>addProduct(product, dispatch)} >add</button>
        </div>
    );
};

export default Add;