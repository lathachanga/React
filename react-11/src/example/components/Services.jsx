import React from 'react'
class Services extends React.Component{
    render(){
        return <div>
              
         <div className="container mt-5 mt-5 bg-light">
           <div className="row">
             <div className="col text-center ">
                <p> Green Agriculture</p>
                <h1> Welcome To Organic</h1>
                <div className="line"></div>
                <p><h6>Services are provided by us for Organic products</h6></p>
              </div>
           </div>
           <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="card-body shadow">
                        <span><i className="bi bi-shop-window"></i></span>  
                        <h2>Always Fresh</h2>
                        <p> Our Organic Products are always fresh</p>      
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="card">
                    <div className="card-body shadow">
                        <span><i className="bi bi-shop-window"></i></span>  
                        <h2>Always Health</h2>
                        <p> Our Organic Products are always  Health</p>      
                    </div>
                </div>
            </div>
             <div className="col-4">
                <div className="card">
                    <div className="card-body shadow">
                        <span><i className="bi bi-shop-window"></i></span>  
                        <h4>Always Chemical-free </h4>
                        <p> Our Organic Products are always Chemical-free  </p>      
                    </div>
                </div>
            </div>
           </div>
        </div>
 
        </div>
    }
}
export default Services