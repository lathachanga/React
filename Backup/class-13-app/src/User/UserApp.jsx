import React from 'react'
import UserList from './UserList'
import UserDetails from './UserDetails'
import Axios from 'axios'
class UserApp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            contacts:[],
            sel_Contact:{}
        }
    }
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
            this.setState({
                contacts: response.data
            })
        })
        .catch()

       
    }
    user_Selected_Contact=(contact)=>{
        console.log(contact.name.first)
           this.setState({sel_Contact: contact})
    }
    render(){
        return (
          <div className="container mt-5">
              <pre>{JSON.stringify(this.state.contacts)}</pre>
              <pre>{JSON.stringify(this.state.sel_Contact)}</pre>
              <h1>User App</h1>
                 <div className="row">
                    <div className="col-md-8">
                      {
                        this.state.contacts.length>0?<>
                        
                            <UserList user_Contacts={this.state.contacts} selected_Contact={this.user_Selected_Contact} />
                        

                        </>:null
                      }
                    </div>
                    <div className="col-md-4">
                      {
                        Object.keys(this.state.sel_Contact).length>0?<>
                        
                           <UserDetails user_Sel_Contact={this.state.sel_Contact}/>
                        
                        </>:null
                      }
                    </div>
                 </div>
           </div>
        )
    }
}
export default UserApp