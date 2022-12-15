import React from 'react'
import {Link} from 'react-router-dom'
import logoorganic from '../Navbar/logoorganic.jpg'
class Footer extends React.Component{
    render(){
        return  <div className="container-fluid bg-dark text-white mt-4 ">
                   <div className="row">
                          <div className="col-md-4">
                                <img src={logoorganic} height="100" width="100"/>
                                <p> Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                                     Standards vary worldwide,but Organic farming features practices that cycle resources.  </p>
                          </div>
                          <div className="col-md-4">
                               <p><b>CONTACT US</b></p>
                               <p><i class="fa-solid fa-location-dot"></i>World Trade Centre,Banglore</p>
                               <p><i class="fa-solid fa-phone"></i>+1234598765</p>
                               <p><i class="fa-solid fa-envelope"></i>xyz@gmail.com</p>
                          </div>
                          <div className="col-md-4  text-white">
                               <p><b>Quick Links</b></p>
                               <div><Link to="/">Home</Link> </div>
                               <div><Link to="/about">About</Link> </div>
                               <div><Link to="/services">Services</Link> </div>
                               <div><Link to="/product">Products</Link> </div>
                               <div><Link to="/contact">Contact</Link> </div>
                          </div>
                    </div>
                </div>
    }
}
export default Footer