import Loading from './Loading';

interface IWarningProps {
    message: string
}

const Warning = ({message}:IWarningProps) => {
    return (
        <div className='warningBlock'>
            <Loading/>
            <h2>{message}</h2>
        </div>
    );
};

export default Warning;