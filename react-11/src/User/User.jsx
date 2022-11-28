import React from 'react'
import Axios from'axios'
class User extends React.Component{
    state;
    constructor(props){
          super(props)
          console.log("first constructor")
          this.state= {
                   users:[]
          }
    }
    get_User_Handler =()=>{
           Axios.get('https://dummyjson.com/users')
                .then((resp)=>{
                    console.log(resp.data)
                    this.setState({
                        users: resp.data
                    })
                })
                .catch()
    }   
   render(){
       console.log("Second render method")
        return (
          <div>
               <h1>User Component</h1>
               <pre>{JSON.stringify(this.state)}</pre>
               <button onClick={this.get_User_Handler}>Get users</button>
               <div className="container">
                   <div className="row">
                        <div className="col-md-6">
                              <table className="table table-hover">
                                  <thead className="bg-dark text-white">
                                      <tr>
                                         <th>ID</th>
                                         <th>Name</th>
                                         <th>Email</th>
                                      </tr>
                                  </thead>
                                   <tbody>
                                     { 
                                          this.state.users.map((user)=>{
                                           return <tr>
                                           <td>{user.id}</td>
                                           <td>{user.firstName}</td>
                                           <td>{user.email}</td>
                                           </tr>
                                          })
                                     }
                                 </tbody>
                        </table>
                    </div>
                </div>
              </div>
            </div>
        )  
    }
}
export default User