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
            <div>
                <label htmlFor="title">Title</label>
                <input ref={titleRef} required id='title'/>
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <select defaultValue={'DEFAULT'} ref={typeRef} id="type" >
                    <option value="DEFAULT" disabled> </option>
                    <option value="Hot Coffee">Hot Coffee</option>
                    <option value="Iced Coffee">Iced Coffee</option>
                    <option value="Fruit Juice">Fruit Juice</option>
                </select>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input min={0} step={'any'} ref={priceRef} required type="Number" id='price'/>
            </div>
            <div>
                <label htmlFor="img">Image</label>
                <input ref={imgRef} required id='img'/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea rows={6} ref={descrRef} required id='description'></textarea>
            </div>
            <button type='submit'>Add</button>
        </form>
    );
};

export default Form;