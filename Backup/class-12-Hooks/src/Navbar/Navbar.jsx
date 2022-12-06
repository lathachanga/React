import React from 'react'
import {Link} from 'react-router-dom'
const Navbar=()=>{
    return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
               <Link to="/"className="navbar-brand">Hooks Examples</Link>
               <div className="ml-auto">
                  <ul className="navbar-nav">
                      <li className="nav-list"><Link className="nav-link text-white" to="/product">Product</Link></li>
                      <li className="nav-list"><Link className="nav-link text-white" to="/digital">Digital</Link></li>
                      <li className="nav-list"><Link className="nav-link text-white" to="/user">User</Link></li>
                  </ul>
               </div>

          </nav>
}     
export default Navbar