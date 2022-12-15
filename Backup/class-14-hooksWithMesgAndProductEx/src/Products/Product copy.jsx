import React from 'react'
import {incrAction,decrAction} from '../redux/Product/Product.action'
import { useDispatch,useSelector } from 'react-redux'
const Product=()=>{
      /*let product={
            product_Name:"iphone",
            price:45000,
            image:'',
            qty:1
      }*/
      let product=useSelector((state)=>{
              return state
      })
      let dispatch = useDispatch()
      return <div className="container">
            <pre>{JSON.stringify(product)}</pre>
                  <div className="row">
                        <div className="col-md-8">
                              <table className="table table-hover">
                                    <thead className="bg-dark text-white">
                                          <tr>
                                                <th>Name</th>
                                                <th>Image</th>
                                                <th>Price</th>
                                                <th>Qty</th>
                                                <th>Total price</th>
                                          </tr>
                                    </thead>
                                    <tbody>
                                         <tr>
                                          <td>{product.product_Name}</td>
                                          <td><img src={product.image} alt=""/></td>
                                          <td>{product.price}</td>
                                          <td><i className="fa fa-minus-circle" onClick={()=>{dispatch(decrAction())}}></i>{product.qty}<i className="fa fa-plus-circle"onClick={()=>{dispatch(incrAction())}}></i></td>
                                          <td>{product.qty*product.price}</td>
                                         </tr>
                                    </tbody>
                              </table>
                        </div>
                  </div>
      </div>
}
export default Product