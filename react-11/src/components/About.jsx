import React from 'react'
import DisplayAbout from './DisplayAbout.jpg';
import Footer from './Footer'
class About extends React.Component{
    render(){
        return <>
                <div className="container mt-5 ml-7">
                    <div className="row">
                           <div className="col-6">
                               <p><b>Organic Products</b></p>
                               <h1>About Our Organic</h1>
                               <div className="line"></div>
                               <p> Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                                       Standards vary worldwide,but Organic farming features practices that cycle resources. Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                                     Standards vary worldwide,but Organic farming features practices that cycle resources.  Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                                     Standards vary worldwide,but Organic farming features practices that cycle resources.  </p>
                              
                            </div>
                            <div className="col-6">
                              <img src={DisplayAbout} height="500" width="500"/>
                            </div>
                    </div>
                </div>
           <Footer/>
  </> 
     
   }
}

  

export default About