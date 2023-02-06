import axios from 'axios';
import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { getAllProducts } from '../store/actions/product.action';

const Add = () => {
    const [product, setProduct] = useState({
        title:'',
        price:0
    })
    const dispatch=useAppDispatch()
    const handleInp = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const obj={
            ...product,
            [e.target.name]:e.target.value
        }
        setProduct(obj)
    }

    const addProduct=async()=>{
        await axios.post('http://localhost:8000/products', product);
        await getAllProducts(dispatch)
    }
    
    return (
        <div>
            <input type="text" name='title' placeholder='title' onChange={handleInp} />
            <input type="number" name='price' placeholder='price' onChange={handleInp} />
            <button onClick={addProduct} >add</button>
        </div>
    );
};

export default Add;