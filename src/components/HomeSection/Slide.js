import React, { useState } from 'react'
import Data from './Data'
import './Home.css'

const Slide = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }
    return (
        <>
            <section className='slider'>
                <div className='control-btn'>
                    <button className='prev' onClick={prevSlide}>
                        <i className='fas fa-caret-left'></i>
                    </button>
                    <button className='next' onClick={nextSlide}>
                        <i className='fas fa-caret-right'></i>
                    </button>
                </div>

                {Data.map((slide, index) => {
                    console.log(slide.images)
                    return (
                        <div className={index === current ? "slide active" : "slide"} key={index}>
                            {index === current && <img src={slide.images} alt="slide" />}
                        </div>
                    )
                })}
            </section>
            <section className='slide-form'>
                <div className='container'>
                    <h2>Buy Your Vegan Beauty</h2>
                    <span>Send us message</span>

                    <form action=''>
                        <input type='text' placeholder='Name*' name='' id='' />
                        <div className='flex_space'>
                            <input type='text' placeholder='Product Delevey Date' name='' id='' />
                            <input type='date' placeholder='Check Out' />
                        </div>
                        <div className='flex_space'>
                            <input type='text' placeholder='Phone No*' />
                            <input type='text' placeholder='Email*' />
                        </div>
                        <input type='number' placeholder='Message' />
                        <input type='Submit' value='Submit' className='submit' placeholder='Rooms' />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Slide
