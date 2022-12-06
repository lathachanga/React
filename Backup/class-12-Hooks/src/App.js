import Product from './Product/Product'
import Navbar from './Navbar/Navbar'
import Digital from './Digital/Digital'
import User from './User/User'
import React  from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
let App=()=>{
    return <div>
     <Router>
       <Navbar/>
       <Switch>
            <Route path="/product" component={Product}></Route>
            <Route path="/digital" component={Digital}></Route>
            <Route path="/user" component={User}></Route>
       </Switch>
     </Router>
       
    </div>
}
export default App