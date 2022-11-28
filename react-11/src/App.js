import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './User/User'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

class App extends React.Component{ 
    render(){
        return  <React.Fragment>
               <Router>
                <Navbar/>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route> 
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/user" component={User}></Route>
                </Switch>
               </Router>
              
          </React.Fragment>
          }
   
}
export default App