import React from 'react'
import logoorganic from '../Navbar/logoorganic.jpg'
class Contact extends React.Component{
    render(){
        return <div>
           
            <section>
    <h1 class="text-center mt-5">Contact Us</h1>
    <div class="container mt-5">
        <div class="row">
            <div class="col-3">
               <img src={logoorganic} height="100" width="100"/>
               <p> Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                Standards vary worldwide,but Organic farming features practices that cycle resources.  </p>
            </div>
            <div class="col-3 mt-5">
              <p><b>CONTACT US</b></p>
                <p><i class="fa-solid fa-location-dot"></i>World Trade Centre,Banglore</p>
                <p><i class="fa-solid fa-phone"></i>+1234598765</p>
                <p><i class="fa-solid fa-envelope"></i>xyz@gmail.com</p>
            </div>
            <div class="col-3 mt-5">
                <p> Subscribe Newsletter</p>
                <div class="form-group">
                <input type="text" class="form-control" placeholder="Name"/>
                </div>
                <div class="form-group">
                <input type="email" class="form-control" placeholder="Your Email"/>
                </div>
                <div class="form-group">
                <input type="number" class="form-control" placeholder="Your Number"/>
                </div>
                <button class="btn btn-success ">Subscribe</button>
            </div>
            <div class="col-3 mt-5">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61813.41501026904!2d79.98171661262455!3d14.465245482179117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cc06fb60447%3A0xd72f457d10dcb852!2sSri%20Thalpagiri%20Ranganadha%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1663825867710!5m2!1sen!2sin" width="350" height="200"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
   </section>
        </div>
    }
}
export default Contact