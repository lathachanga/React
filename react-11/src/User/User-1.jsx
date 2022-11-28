import React from 'react'
import Axios from'axios'
class User extends React.Component{
    state;
    constructor(props){
          super(props)
          console.log("first constructor")
          this.state={
                   users:[]
          }
    }
   componentDidMount(){
    console.log("third one")
    Axios.get('https://dummyjson.com/users')
    .then((response)=>{
        this.setState({
            users:response.data
        })
    })
    .catch()
   }    
   render(){
       console.log("Second render method")
        return <div>
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
                            <th>FirstName</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody>
                             { 
                                this.state.users.map((user)=>{
                                   
                                   return <tr>
                                       <th>{user.id}</th>
                                       <th>{user.firstName}</th>
                                       <th>{user.email}</th>
                                   </tr>

                                 })
                             }
                        </tbody>
                    </table>
                </div>
            </div>
         </div>
        </div>
    }
}
export default User