const Contact = () => {
    return (
        <section className='contact'>
            <div className='contact__text'>
                <h2>Contact Wave</h2>
                <p>
                    Have a question about our coffee selection or need assistance with your order? Contact us at Wave Cafe and our dedicated team will be happy to help. We look forward to connecting with fellow coffee enthusiasts like you!
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