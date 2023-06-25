const aboutImg1 = require('../assets/images/about-1.png')
const aboutImg2 = require('../assets/images/about-2.png')

const About = () => {
    return (
        <section className='aboutUs'>
            <div className='aboutUs__block1'>
                <h2>About Wave Cafe</h2>
                <div className='block1__content'>
                    <img src={aboutImg1} alt="Barista" />
                    <div className="block1__content-text">
                        <p>
                            Wave Cafe is a one-page video background HTML CSS template from Tooplate. You can use this for your business websites.
                        </p>
                        <p>
                            You can also use this for your client websites which you get paid for your website services. Please tell your friends about us.
                        </p>
                    </div>
                </div>
            </div>
            <div className='aboutUs__block2'>
                <div className='block2__content'>
                    <div>
                        <h2>How we began</h2>
                        <p>
                            If you wish to support us, please contact Tooplate. Thank you. Duis bibendum erat nec ipsum consectetur sodales.
                        </p>
                    </div>
                    <img src={aboutImg2} alt="Coffee" />
                </div>
                <p>
                    Donec non urna elit. Quisque ut magna in dui mattis iaculis eu finibus metus. Suspendisse vel mi a lacus finibus vehicula vel ut diam. Nam pellentesque, mi quis ullamcorper.
                </p>
            </div>
        </section>
    );
};

export default About;