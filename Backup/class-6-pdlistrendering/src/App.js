import React from 'react'
import Navbar from './Navbar/Navbar'
import Product from './products/Product'
import CompA from './PropsDrilling/CompA'
import Employee from './Employee/Employee'
class App extends React.Component{
    render(){
        return <div>
                <Navbar/>
                <Product/>
                <hr/>
                <CompA/>
                <hr/>
                <Employee/>
             </div>}

}
export default App