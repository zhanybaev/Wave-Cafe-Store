import { LegacyRef } from 'react';

interface IFormProps{
    formHandler(event:React.FormEvent):void,
    titleRef:LegacyRef<HTMLInputElement> | undefined,
    typeRef:LegacyRef<HTMLSelectElement> | undefined,
    priceRef:LegacyRef<HTMLInputElement> | undefined,
    imgRef:LegacyRef<HTMLInputElement> | undefined,
    descrRef:LegacyRef<HTMLTextAreaElement> | undefined,
}

const Form = ({formHandler, titleRef, typeRef, priceRef, imgRef, descrRef}:IFormProps) => {
    return (
        <form onSubmit={(e)=>formHandler(e)}>
            <input ref={titleRef} required placeholder='Title'/>
            <select ref={typeRef}>
                <option value="Hot Coffee">Hot Coffee</option>
                <option value="Iced Coffee">Iced Coffee</option>
                <option value="Fruit Juice">Fruit Juice</option>
            </select>
            <input step={'any'} ref={priceRef} required type="Number" placeholder='Price'/>
            <input ref={imgRef} required placeholder='Image'/>
            <textarea rows={6} ref={descrRef} required placeholder='Description'></textarea>
            <button type='submit'>Add</button>
        </form>
    );
};

export default Form;