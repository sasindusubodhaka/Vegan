import React,{useEffect} from 'react'
import Header from '../../common/Navbar/Header';
import Hero from '../HomeSection/Hero'
import HomeAbout from '../HomeSection/HomeAbout';

const Home = () => {
    useEffect(() => {
        console.log("Home")
    }, []);
    return (
        <>     
            <Header />       
            <Hero />
            <HomeAbout />
        </>
    )
}

export default Home
