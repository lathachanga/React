import React , {useState} from 'react'
const Product=()=>{
    const [product,setProduct]=useState({product_Name:"Iphone12",price:45000,qty:1})  
    return <React.Fragment>
          <pre>{JSON.stringify(product)}</pre>
          <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <table className="table table-hover">
                        <thead>
                           <tr>
                             <th>Id</th>
                             <th>Name</th>
                             <th>Price</th>
                             <th>Qty</th>
                             <th>Total</th>
                           </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>{product.product_Name}</td>
                                <td>{product.price}</td>
                                <td><i className=" fa fa-minus-circle" onClick={()=>{setProduct({...product, qty:product.qty-1})} }></i>{product.qty}<i className="fa fa-plus-circle" onClick={ ()=>{setProduct({...product,qty:product.qty+1})}} ></i></td>
                                <td>{product.qty*product.price} </td>
                               
                                </tr>  
                       </tbody>
                    </table>
                </div>
            </div>
          </div>
    </React.Fragment>
}
export default Product