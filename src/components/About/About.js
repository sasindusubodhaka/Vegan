import React from 'react'
import AboutCard from './AboutCard'
import './About.css'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import Header from '../../common/Navbar/Header'

const About = () => {
    return (
        <>
        <Header />
        <HeadTitle />
            <section className='about top'>
                <div className='container'>
                    <AboutCard />
                </div>
            </section>
            {/* <section className='features'>
                <div className='container aboutCard felx_space'>
                    <div className='row row1'>
                        <h1>
                            Our <span>Vision</span>{""}
                        </h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </div>
                    <div className='row image'>
                        <img src="/images/slider-1.jpg" alt="" />
                        <div className='control-btn'>
                            <button className='prev'>
                                <i className='fas fa-play'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default About
