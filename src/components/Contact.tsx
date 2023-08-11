import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import SnackBar from './SnackBar';

const Contact = () => {
    const [showBar, setShowBar] = useState(false)
    const [text, setText] = useState(['success', 'successfully sent'])
    const form = useRef<HTMLFormElement>(null);
    
    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault();

        if(!form.current)return;
        const serviceID = process.env.REACT_APP_GMAIL_SERVICE_ID || ''
        const templateID = process.env.REACT_APP_GMAIL_TEMPLATE_ID || ''
        const publicKey = process.env.REACT_APP_GMAIL_PUBLIC_KEY || ''
        
        try {
            await emailjs.sendForm(serviceID, templateID, form.current, publicKey)  
            setText(['success', 'successfully sent'])
        } catch (error) {
            setText(['error', `${error}`])
        }finally{
            setShowBar(true)
            form.current.reset()
        }       
    }

    return (
        <section className='contact'>
            <div className='contact__text'>
                <h2>Contact Wave</h2>
                <p>
                    Have a question about our coffee selection or need assistance with your order? Contact us at Wave Cafe and our dedicated team will be happy to help. We look forward to connecting with fellow coffee enthusiasts like you!
                </p>
            </div>
            <div className='contact__form'>
                <form onSubmit={handleSubmit} ref={form}>
                    <input name="user_name" placeholder='Name' required/>
                    <input name="user_email" type="email" placeholder='Email' required/>
                    <textarea name="message" rows={6} placeholder='Message' required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <SnackBar showBar={showBar} text={text[1]} type={text[0]} />
        </section>
    );
};

export default Contact;