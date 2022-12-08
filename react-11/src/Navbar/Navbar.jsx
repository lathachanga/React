import React from 'react'
import {Link} from 'react-router-dom'
 class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Hooks</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                      <li className="nav-list"><Link className="nav-link text-white" to="/login">Login</Link></li>
                      <li className="nav-list"><Link className="nav-link text-white" to="/ref">UseRefHook</Link></li>
                      <li className="nav-list"><Link className="nav-link text-white" to="/reflogin">UseRefHook-Login</Link></li>
                      <li className="nav-list"><Link className="nav-link text-white" to="/reducer">UseReducer-Hook</Link></li>
                    </ul>
                </div>
        </nav>
    }
}
export default Navbar