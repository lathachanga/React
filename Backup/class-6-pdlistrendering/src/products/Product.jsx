import React from'react'
class Product extends React.Component{
    state={
        product:{  
           name:"vivo" ,
           price:15000,
           image:"https://rukminim1.flixcart.com/image/416/416/l2p23rk0/mobile/x/b/y/-original-imagdznhnzmzfbwx.jpeg?q=70",
           qty:1
        }
     
    }
  
    incrHandler=()=>{
        this.setState({product:{...this.state.product, qty:this.state.product.qty + 1 }})
    }
    decrHandler=()=>{
       this.setState({product:{...this.state.product,qty:this.state.product.qty-1}})
    }
    render(){
        return <div className="container mt-5">
            <div className="row">
                <div className="col">
                    <table className="table ">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.product.name}</td>
                                <td>{this.state.product.price}</td>
                                <td><img src={this.state.product.image} height="100"/></td>
                                <td><i className=" fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.product.qty}<i className="fa fa-plus-circle" onClick={this.incrHandler} ></i></td>
                                <td>{this.state.product.qty*this.state.product.price}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        }
}
export default Product