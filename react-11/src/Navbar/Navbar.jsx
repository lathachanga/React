import React from 'react'
import {Link} from 'react-router-dom'
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navabar-dark bg-dark navbar-expand-lg">
             <Link to="/" className="navbar-brand text-white ">Routing</Link>
             <div className="ml-auto">
                <ul className="navbar-nav">
                    <li className="nav-list"><Link to="/home" className="nav-link text-white">Home</Link></li>
                    <li className="nav-list"><Link to="/about" className="nav-link text-white">About</Link></li>
                    <li className="nav-list"><Link to="/contact" className="nav-link text-white">Contact</Link></li>
                    <li className="nav-list"><Link to="/user" className="nav-link text-white">User</Link></li>
                    <li className="nav-list"><Link to="/digital" className="nav-link text-white">Clock</Link></li>
                </ul>
             </div>
        </nav>   
    }
}
export default Navbar