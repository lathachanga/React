import React from 'react'
import Employee from './Employee'
class User extends React.Component{
    locations=['Nellore','Andhra pradesh','Karnataka']
    user={
        id:101,
        name:"Srilatha",
        email:"Srilatha@gmail.com"
    }
    render(){
        return <div>
           <h1> User Component </h1>
           <hr/>
           <Employee loc={this.locations} user={this.user}/>
        </div>
    }
}
export default User