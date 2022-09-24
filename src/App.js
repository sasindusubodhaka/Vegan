import React ,{useEffect} from 'react'
import { BrowserRouter as  Router, Route, Routes } from 'react-router-dom'
import Navbar from './common/Navbar/Navbar'
import './App.css'
import Home from './components/pages/Home'
import About from './components/About/About'
import Gallery from './components/Gallery/Gallery'
import Login from './components/login/Login'



const App=() =>{
  useEffect(() => {
    console.log("App")
}, []);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path ='/' exact element={<Home />}></Route>      
          <Route path ='/about' exact element={<About />}></Route>  
          <Route path = '/products' exact element={<Gallery />}></Route>
          <Route path = '/sign-in' exact element={<Login />}></Route>
        </Routes>

      </Router>
    </>
  )
}

export default App