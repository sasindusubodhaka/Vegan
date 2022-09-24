import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import logo from '/images/logo.png'

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className="navbar">
                <div className='container flex_space'>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li><Link to='./' onClick={closeMobileMenu}>Home</Link></li>
                        <li><Link to='./about' onClick={closeMobileMenu}>About</Link></li>
                        <li><Link to='./products' onClick={closeMobileMenu}>Products</Link></li>
                        {/* <li><Link to='./contact' onClick={closeMobileMenu}>Contact Us</Link></li> */}

                    </ul>
                    <div className='login-area flex'>
                        <li>
                            <Link to='/sign-in'>
                                <i className='far fa-chevron-right'>Sign In</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/register'>
                                <i className='far fa-chevron-right'>Register</i>
                            </Link>
                        </li>
                        <li>
                            <Link to='/contact'>
                                <button className='primary-btn'>Shop Now</button>
                            </Link>
                        </li>
                    </div>
                </div>

            </nav>            
        </>
    )
}

export default Navbar