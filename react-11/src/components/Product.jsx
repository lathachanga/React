import React from 'react'
import Apple from '../images/Apple.jpg'
import Blackgrapes from '../images/Blackgrapes.jpg'
import Greengrapes from '../images/Greengrapes.jpg'
import Mango from '../images/Mango.jpg'
import Orange from '../images/Orange.jpg'
import Strawberry from '../images/Strawberry.jpg'
import Footer from'./Footer'
class Product extends React.Component{
    render(){
        return     <div className="container-fluid mt-5 mt-5">
                        <div className="row">
                            <div className="col text-center">
                                <p> Green Agriculture</p>
                                <h1> Our Best Products</h1>
                                <div className="line"></div>
                                     <p><h6>The best agricultural organic products are available here</h6></p>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-4 text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="star>">  
                                             <span><i className="bi bi-star-fill"></i></span>
                                        </div>
                                        <img src={Apple} height="250" width="300"/>
                                        <h4>Apple</h4>
                                        <p>2 X 454g /16oz</p>
                                        <h4>$43.00</h4>
                                        <button  className="btn btn-success">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="star>"> 
                                        <span><i className="bi bi-star-fill"></i></span>
                                        </div>
                                        <img src={Orange} height="250" width="300"/>
                                        <h4>Orange</h4>
                                        <p>2 X 454g /16oz</p>
                                        <h4>$45.00</h4>
                                        <button  className="btn btn-success">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="star>"> 
                                            <span><i className="bi bi-star-fill"></i></span>
                                        </div>
                                        <img src={Mango} height="250" width="300"/>
                                        <h4>Mango</h4>
                                        <p>2 X 454g /16oz</p>
                                        <h4>$50.00</h4>
                                        <button  className="btn btn-success">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-4 text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="star>"> 
                                            <span><i className="bi bi-star-fill"></i></span>
                                        </div>
                                        <img src={Blackgrapes} height="250" width="300"/>
                                        <h4>Black Grapes</h4>
                                        <p>2 X 454g /16oz</p>
                                        <h4>$30.00</h4>
                                        <button  className="btn btn-success">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="card">
                                    <div className="card-body">
                                       <div className="star>"> 
                                             <span><i className="bi bi-star-fill"></i></span>
                                       </div>
                                       <img src={Strawberry} height="250" width="300"/>
                                       <h4>Strawberry</h4>
                                       <p>2 X 454g /16oz</p>
                                       <h4>$60.00</h4>
                                       <button  className="btn btn-success">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4 text-center">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="star>"> 
                                             <span><i className="bi bi-star-fill"></i></span>
                                        </div>
                                        <img src={Greengrapes} height="250" width="300"/>
                                        <h4>Green Grapes</h4>
                                        <p>2 X 454g /16oz</p>
                                        <h4>$70.00</h4>
                                        <button  className="btn btn-success">ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center  mt-5">
                            <div className="col">
                                <button className="btn btn-success">Read More</button>
                            </div>
                        </div>
                  <Footer/>

                   </div>
      
    }
}
export default Product