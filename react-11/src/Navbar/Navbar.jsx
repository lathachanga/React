import React from 'react'
import {Link} from 'react-router-dom'
import logoorganic from './logoorganic.jpg'
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navabar-dark bg-dark navbar-expand-lg">
             <Link to="/" className="navbar-brand  "><img src={logoorganic} height="90" width="100"/></Link>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
             <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-list "><Link to="/" className="nav-link text-white active" >Home</Link></li>
                    <li className="nav-list"><Link to="/about" className="nav-link text-white">About</Link></li>
                    <li className="nav-list"><Link to="/services" className="nav-link text-white">Services</Link></li>
                    <li className="nav-list"><Link to="/product" className="nav-link text-white">Products</Link></li>
                    <li className="nav-list"><Link to="/contact" className="nav-link text-white">Contact Us</Link></li>
                </ul>
               
             </div>
        </nav>   
    }
}
export default Navbar
