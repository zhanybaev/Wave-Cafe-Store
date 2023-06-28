
const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact__text'>
                <h2>Contact Wave</h2>
                <p>
                    Wave Cafe Template has a video background. You can use this layout for your websites. Please contact Tooplate's Facebook page. Tell your friends about our website.
                </p>
            </div>
            <div className='contact__form'>
                <input placeholder='Name' required/>
                <input type="email" placeholder='Email' required/>
                <textarea rows={6} placeholder='Message' required></textarea>
                <button>Submit</button>
            </div>
        </section>
    );
};

export default Contact;