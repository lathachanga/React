import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Services from './components/Services'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
class App extends React.Component{ 
    render(){
        return  <React.Fragment>
               <Router>
                <Navbar/>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/about" component={About}></Route> 
                    <Route path="/services" component={Services}></Route>
                    <Route path="/product" component={Product}></Route>
                    <Route path="/contact" component={Contact}></Route>
                </Switch>
               </Router>
              
          </React.Fragment>
          }
   
}
export default App