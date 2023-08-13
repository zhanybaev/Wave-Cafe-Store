import { useState } from "react";
import Edit from "./Edit";
import Payment from "./Payment";
const CloseIcon = require('../assets/icons/close-circle-svgrepo-com.svg')

interface IModalProps{
    showModal:boolean
    setShowModal(showModal:boolean):void
    role:string
}

const Modal = ({showModal, setShowModal, role}:IModalProps) => {
    const [visible, setVisible] = useState(true)

    const closeModal = () =>{
        setVisible(false)
        setTimeout(()=>{
            setShowModal(false)
            setVisible(true)
        }, 1000)
        const html = document.querySelector('html');
        if (html) {
            html.style.overflow = 'auto';
        }
    }
    
    return (
        <div 
            className={`modal-background ${visible ? 'visible' : 'hidden'}`}
            style={{display: showModal ? 'block': 'none'}}> 
            <div className="modal">
                { role ==='edit' ? <Edit closeModal={closeModal}/> : role ==='payment' ? <Payment closeModal={closeModal}/> : null}
            </div>
            <button onClick={closeModal} className="closeModal">
                <img src={CloseIcon.default} alt="close icon" />
            </button>
        </div>
    );
};

export default Modal;