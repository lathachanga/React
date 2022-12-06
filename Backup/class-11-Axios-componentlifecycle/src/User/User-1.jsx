import React from 'react'
import Axios from'axios'
class User extends React.Component{
    state;
    constructor(props){
          super(props)
          console.log("first constructor")
          this.state={
                   user:[]
          }
    }
   componentDidMount(){
    console.log("third one")
    Axios.get('https://dummyjson.com/users')
    .then((response)=>{
        this.setState({
            user:response.data
        })
    })
    .catch()
   }    
   render(){
       console.log("Second render method")
        return <div>
        <h1>User Component</h1>
        <pre>{JSON.stringify(this.state)}</pre>
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
                                       Object.keys(this.state.user).length > 0 ? 
                                        <>
                                         {
                                            this.state.user.users.map((userObj)=>{
                                            return <tr>
                                            <td>{userObj.id}</td>
                                            <td>{userObj.firstName}</td>
                                            <td>{userObj.email}</td>
                                            </tr>
                                           })
                                         } 
                                        </> : null
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