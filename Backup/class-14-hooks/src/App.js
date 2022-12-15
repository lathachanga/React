import React from 'react'
import Navbar from './Navbar/Navbar'
import Login from './Login/Login'
import ImageEx from './Hooks/ImageEx'
import LoginEx from './Hooks/LoginEx'
import MessageEx from './Hooks/MessageEx'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends React.Component{
   render(){
      return <div>
         <Router>
           <Navbar/>
            <Routes>
              <Route path="/login" element={<Login/>}/>
              <Route path="/ref" element={<ImageEx/>}/>
              <Route path="/reflogin" element={<LoginEx/>}/>
              <Route path="/reducer" element={<MessageEx/>}/>
            </Routes>
         </Router>
         
       
      </div>
  }


}
export default App