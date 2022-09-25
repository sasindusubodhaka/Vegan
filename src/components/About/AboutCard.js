import React from 'react'
import './About.css'

const AboutCard = () => {
    return (
        <>
            <div className='aboutCard mtop flex_space'>
                <div className='row row1'>
                    <h4></h4>
                    <h1>
                        Our <span>Vision </span>
                    </h1>
                    <p style={{fontSize:'20px'}}>
                        To manufacture premium quality 100% vegan cosmetics for unparalleled beauty.
                    </p>
                    <h1>
                        Our <span style={{color:"#31b675"}}>Mission</span>{""}
                    </h1>
                    <p style={{fontSize:'20px'}}>
                    We transform herbal wellness into vegan cosmetics by understanding the need for vegan products in Sri Lanka. We promise 100% vegan products free of animal ingredients, animal testing and animal directives. Our products are a symbol of herbal wellness that causes no side effects. We reach beyond the limit by including best environmental and social governance to our production.
                    </p>


                </div>
                <div className='row image1'>
                    <img src="/images/ss.jpg" alt="" />
                    {/* <div className='control-btn'>
                        <button className='prev'>
                            <i className='fas fa-play'></i>
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default AboutCard
