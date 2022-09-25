import React from 'react'
import '../About/About.css'

const HomeDescription = () => {
    return (
        <>
            <div className='aboutCard mtop flex_space'>
                <div className='row row1'>
                    <h4>Our Story</h4>
                    <h1>
                        At <span>La Ceylon, </span> 
                    </h1>
                    <p style={{fontSize:'30px'}}>
                    We embody Sri Lanka's incredible biodiversity, are inspired by our island's heritage of ancient Ayurveda and Hela-Veda herbal remedies, and are deeply committed to environmental stewardship.
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

export default HomeDescription
