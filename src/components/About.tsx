const aboutImg1 = require('../assets/images/about-1.png')
const aboutImg2 = require('../assets/images/about-2.png')

const About = () => {
    return (
        <section className='aboutUs'>
            <div className='aboutUs__block1'>
                <h2>About Wave Cafe</h2>
                <div className='block1__content'>
                    <img loading="lazy" src={aboutImg1} alt="Barista" />
                    <div className="block1__content-text">
                        <p>
                            Welcome to Wave Cafe, your ultimate destination for exceptional coffee. We are dedicated to sourcing the finest coffee beans from around the world. 
                        </p>
                        <p>
                            With a commitment to quality, sustainability, and a seamless customer experience, we invite you to join us on a journey of discovering new flavors and elevating your coffee experience.
                        </p>
                    </div>
                </div>
            </div>
            <div className='aboutUs__block2'>
                <div className='block2__content'>
                    <div>
                        <h2>How we began</h2>
                        <p>
                            Wave Cafe began with a simple passion for coffee and a desire to share that passion with others. It all started with a small coffee cart.
                        </p>
                    </div>
                    <img loading='lazy' src={aboutImg2} alt="Coffee" />
                </div>
                <p>
                    As word spread about our exceptional coffee and personalized service, we knew it was time to expand and bring our love for coffee to a wider audience. And so, Wave Cafe was born, offering an online platform for coffee lovers to explore and indulge in the finest coffee beans from around the world.
                </p>
            </div>
        </section>
    );
};

export default About;