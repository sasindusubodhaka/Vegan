import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <header>
                <div className='container flex_space'>
                    <div className='logo'>
                        <img className="logo-image" src="/images/La_Ceylon.jpg" alt='' />
                    </div>
                    <div className='contact flex_space'>
                        <div className='box flex_space'>
                            <div className='icons'>
                                <i className='fas fa-phone'></i>
                            </div>
                            <div className='text'>
                                <h4>Call Us</h4>
                                <Link to="/contact">+11 123 5679</Link>
                            </div>
                        </div>
                        <div className='box flex_space'>
                            <div className='icons'>
                                <i className='fas fa-envelope'></i>
                            </div>
                            <div className='text'>
                                <h4>Mail Us</h4>
                                <Link to="/contact">laceylonvegan@gmail.com</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header