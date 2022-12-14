import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import DigitalClock from './components/DigitalClock'
import User from './User/User-1'
import Salary from './EventBinding/Salary-1'
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
                    <Route path="/digital" component={DigitalClock}></Route>
                    <Route path="/salary" component={Salary}></Route>
                </Switch>
               </Router>
              
          </React.Fragment>
          }
   
}
export default App