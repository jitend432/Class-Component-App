import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import Home from './Pages/Home/home';
import Contact from './Pages/Contact/contact';
//import Ven from './Pages/ClassComponent/class';
import About from './Pages/About/about';
import DrawerNavbar from './Component/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  


  return (
    <>
   
    <Router>
    <DrawerNavbar/>

      <Routes>
        <Route path = "/home" element = {<Home/>}/>                  
        <Route path = "/about" element = {<About/>}/>                  
        <Route path = "/contact" element = {<Contact/>}/>                  
      </Routes>

      {/* <Ven/> */}
    </Router>
        
    </>
  )
}

export default App
