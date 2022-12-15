import React from 'react'
//import Style from "../components/Style.css"
import title from '../images/title.jpg'
import carrotfordisplay from '../images/carrotfordisplay.jpg'
import tomatofordisplay from '../images/tomatofordisplay.jpg'
import Footer from './Footer'
class Home extends React.Component{
    render(){
        return <div>
         
                <div className="carousel slide" id="carouselExampleInterval" data-ride="carousel">
                        <div className="carousel-inner" data-interval="10">
                            <div className="carousel-item active">
                                
                                  <img src={title} height="700" width="200" className="d-block w-100"/>
  
                            </div>                                              
                            <div className="carousel-item ">
                                  <img src={carrotfordisplay}  height="700" width="500"className="d-block w-100"/>
   
                            </div>
  
                            <div className="carousel-item">
                                <img src={tomatofordisplay} height="700" width="500" className="d-block w-100"/>
   
                            </div>
   
                        </div>
                    </div>
                 
             
                 <Footer/>
                </div>
    }
   
}
export default Home
