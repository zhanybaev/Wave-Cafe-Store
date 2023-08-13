import React, { useState } from 'react';
import SnackBar from './SnackBar';
import { useAppSelector } from '../store';
import { useNavigate } from 'react-router-dom';

interface IPaymentProps{
    closeModal():void
}

const Payment = ({closeModal}:IPaymentProps) => {
    const { user } = useAppSelector(state=>state.auth)
    const [showBar, setShowBar] = useState(false)
    const navigate = useNavigate()

    const purchase = async (e:React.FormEvent) => {
        e.preventDefault()

        setShowBar(true)
        setTimeout(() => {
            closeModal();
            setShowBar(false);

            setTimeout(()=>{
                navigate('/')
            }, 1000)
          }, 900);
    }

    return (
        <div className="paymentForm">
            <form onSubmit={purchase}>
                <div>
                    <label htmlFor="name">Cardholder name</label>
                    <input id='name' required/>
                </div>
                <div>
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input id='expiryDate' type="date" required/>
                </div>
                <div>
                    <label htmlFor="card">Card Number</label>
                    <input id='card' required/>
                </div>
                <div>
                    <label htmlFor="cvv">CVV Code</label>
                    <input type='password' max={4} id='cvv' required/>
                </div>
                <div>
                    <label htmlFor="phone">Phone</label>
                    <input id='phone' type="number" required/>
                </div>
                <div>
                    <label htmlFor="email">E-Mail</label>
                    <input id='email' type='email' defaultValue={user?.email} required/>
                </div>
                <button type='submit'>Purchase</button>
            </form>
            <SnackBar showBar={showBar} text="Payment Successful" type='success'/> 
        </div>
    );
};

export default Payment;