import Edit from "./Edit";

interface IModalProps{
    showModal:boolean
    setShowModal(showModal:boolean):void
}

const Modal = ({showModal, setShowModal}:IModalProps) => {
    const closeModal = () =>{
        setShowModal(false)
        const html = document.querySelector('html');
        if (html) {
            html.style.overflow = 'auto';
        }
    }
    
    return (
        <div 
            style={{display: showModal ? 'block': 'none'}} 
            className="modal-background">
            <div className="modal">
                <Edit closeModal={closeModal}/>
            </div>
            <button onClick={closeModal} className="closeModal">X</button>
        </div>
    );
};

export default Modal;