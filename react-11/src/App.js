import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Services from './components/Services'

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
class App extends React.Component{ 
    render(){
        return  <React.Fragment>
               <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route> 
                    <Route path="/services" element={<Services/>}></Route>
                    <Route path="/product" element={<Product/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
               </Router>
              
          </React.Fragment>
         
          }
   
}
export default App