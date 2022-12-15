import React from 'react'
class UserDetails extends React.Component{
    render(){
        return <div className="container">
            <h1>User Details</h1>
            <pre>{JSON.stringify(this.props)}</pre>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-header">
                               
                            </div>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item"> <b>Id:</b>  {this.props.user_Sel_Contact.id}</li>
                                    <li className="list-group-item"> <b>Name</b>: {this.props.user_Sel_Contact.name}</li>
                                    <li className="list-group-item"> <b>UserName</b>: {this.props.user_Sel_Contact.username}</li>
                                    <li className="list-group-item"> <b>Email</b> : {this.props.user_Sel_Contact.email}</li>
                                    <li className="list-group-item"> <b>Phone</b>: {this.props.user_Sel_Contact.phone}</li>
                                    <li className="list-group-item"> <b>Company</b>: {this.props.user_Sel_Contact.company.name}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

        </div>
    }
}
export default UserDetails