import React from 'react'
import display1 from '../images/display1.jpg'
import carrotfordisplay from '../images/carrotfordisplay.jpg'
import tomatofordisplay from '../images/tomatofordisplay.jpg'
class Home extends React.Component{
    render(){
        return <div>
         
         <div className="carousel slide" id="carouselExampleInterval" data-ride="carousel">
<div className="carousel-inner" data-interval="10000">
    <div className="carousel-item active">
        <img src={display1} height="700" width="500" className="d-block w-100"/>
  
   </div>
    <div className="carousel-item ">
        <img src={carrotfordisplay}  height="700" width="500"className="d-block w-100"/>
   
    </div>
  
    <div className="carousel-item">
         <img src={tomatofordisplay} height="700" width="500" className="d-block w-100"/>
   
    </div>
   
</div>
</div>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
      
        </div>
    }
   
}
export default Home
