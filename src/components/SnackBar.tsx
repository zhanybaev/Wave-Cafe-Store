interface ISnackBarProps{
    showBar: boolean;
    text:string,
    type:string
}

const SnackBar = ({text, type, showBar}:ISnackBarProps) => {
    const successIcon = require('../assets/icons/success-icon.svg');
    const errorIcon = require('../assets/icons/error-icon.svg')
    return (
        <figure 
            style={{display: showBar ? 'block' : 'none'}} 
            className={`notification ${type}-notification`}>
            <div className="notification__body">
                <img 
                    src={type==='success'?successIcon.default:errorIcon.default} 
                    alt="Success" 
                    className='notification__icon'
                    title='Success'
                />
                {text}
            </div>
            <div className="notification__progress"></div>
        </figure>
    );
};

export default SnackBar;