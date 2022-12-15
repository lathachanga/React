import React from 'react'

//import "../components/"
import homepic from '../images/homepic.jpg'
//import carrotfordisplay from '../images/carrotfordisplay.jpg'
//import tomatofordisplay from '../images/tomatofordisplay.jpg'
import Footer from './Footer'
class Home extends React.Component{
    render(){
        return <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div >
                            <h1 className="home" >Welcome to Organic</h1>
                            <p>Organic food is about food and drinks produced by methods complying with the standards of organic farming.
                                       Standards vary worldwide,but Organic farming features practices that cycle resources. </p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <img src={homepic} height="600" width="975"/>
                        </div>
                    </div>
                    
              
                 <Footer/>
             </div>
    }
   
}
export default Home
