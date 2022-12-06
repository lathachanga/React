import React from 'react'
import Axios from 'axios'
class User extends React.Component{
    state ={
        users:[]
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
              this.setState({users: response.data})
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render(){
        return(
             
                <div className="container mt-5">
                  <pre>{JSON.stringify(this.state.users)}</pre>
                    <div className="row">
                        <div className="col-md-8">
                            <table className="table">
                                <thead>
                                      <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                      </tr>
                                </thead>
                                <tbody>
                                  {
                                    this.state.users.length > 0 ? <>
                                        {  
                                           this.state.users.map((user)=>{
                                            return <tr key={user.id}>
                                               <td>{user.id}</td>
                                               <td>{user.name}</td>
                                               <td>{user.email}</td>
                                               <td>{user.address.street}</td>

                                               </tr>
                                             })
                                         }
                                     </>:null
                                  }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
        )
    }
}
export default User