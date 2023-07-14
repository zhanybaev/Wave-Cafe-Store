import { LegacyRef } from 'react';

interface IFormProps{
    btnText:string,
    formHandler(event:React.FormEvent):void,
    titleRef:LegacyRef<HTMLInputElement> | undefined,
    typeRef:LegacyRef<HTMLSelectElement> | undefined,
    priceRef:LegacyRef<HTMLInputElement> | undefined,
    imgRef:LegacyRef<HTMLInputElement> | undefined,
    descrRef:LegacyRef<HTMLTextAreaElement> | undefined,
}

const Form = ({btnText, formHandler, titleRef, typeRef, priceRef, imgRef, descrRef}:IFormProps) => {
    const types = ["Hot Coffee", "Iced Coffee", "Fruit Juice", "Special Item"]
    return (
        <form onSubmit={(e)=>formHandler(e)}>
            <div>
                <label htmlFor="title">Title</label>
                <input placeholder='Title' ref={titleRef} required id='title'/>
            </div>
            <div>
                <label htmlFor="type">Type</label>
                <select defaultValue={'DEFAULT'} ref={typeRef} id="type" >
                    <option value="DEFAULT" disabled>Type</option>
                    {
                        types.map((item)=>(
                            <option key={item} value={item}>{item}</option>
                        ))
                    }
                </select>
            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input placeholder='Price' min={0} step={'any'} ref={priceRef} required type="Number" id='price'/>
            </div>
            <div>
                <label htmlFor="img">Image</label>
                <input placeholder='Image' ref={imgRef} required id='img'/>
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <textarea placeholder='Description' rows={6} ref={descrRef} required id='description'></textarea>
            </div>
            <button type='submit'>{btnText}</button>
        </form>
    );
};

export default Form;