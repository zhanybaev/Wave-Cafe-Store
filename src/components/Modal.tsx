import { useState } from "react";
import Edit from "./Edit";
const CloseIcon = require('../assets/icons/close-circle-svgrepo-com.svg')

interface IModalProps{
    showModal:boolean
    setShowModal(showModal:boolean):void
}

const Modal = ({showModal, setShowModal}:IModalProps) => {
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
                <Edit closeModal={closeModal}/>
            </div>
            <button onClick={closeModal} className="closeModal">
                <img src={CloseIcon.default} alt="close icon" />
            </button>
        </div>
    );
};

export default Modal;