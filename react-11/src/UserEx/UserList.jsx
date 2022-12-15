import React from 'react'
class UserList extends React.Component{
    userHandler=(contact)=>{
           // console.log(contact.name.first)
            this.props.selected_Contact(contact)
    }
    render(){
        return <div className="container">
             <h1>User List</h1>
             <pre>{JSON.stringify(this.props)}</pre>
            <div className="row">
                <div className="col">
                      <table className="table table-hover table-striped">
                        <thead className="bg-dark text-white">
                           <tr>
                              <th>Id</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Address</th>
                           </tr>
                        </thead>
                        <tbody>
                             {
                                this.props.user_Contacts.length > 0 ?<>
                                {
                                    this.props.user_Contacts.map((contact,index)=>{
                                        return <tr key={index} onMouseOver={this.userHandler.bind(this, contact)}>
                                            <td>{contact.id}</td>
                                            <td>{contact.name}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.address.street}</td>
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
    }
}
export default UserList