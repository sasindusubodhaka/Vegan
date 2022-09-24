import React from 'react'
import './About.css'

const AboutCard = () => {
    return (
        <>
            <div className='aboutCard mtop flex_space'>
                <div className='row row1'>
                    <h4>About Us</h4>
                    <h1>
                        We <span>provide Solution </span> to grow your business
                    </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button className='primary-btn'>
                        Explore More <i className='fas fa-long-arrow-alt-right'></i>
                    </button>
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
