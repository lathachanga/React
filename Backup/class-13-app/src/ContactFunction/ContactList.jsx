let ContactList=(props)=>{
   let contactHandler=(contact)=>{
       props.selected_Contact(contact)
    }
    return <div className="container">
             <h1>Contact List</h1>
             <pre>{JSON.stringify(props)}</pre>
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
                                props.user_Contacts.length>0?<>
                                {
                                   props.user_Contacts.map((contact,index)=>{
                                    return <tr key={index} onMouseOver={contactHandler.bind(this,contact)}>
                                            <td>{contact.login.uuid.substr(32)}</td>
                                            <td>{contact.name.first}</td>
                                            <td>{contact.email}</td>
                                            <td>{contact.gender}</td>
                                           
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
export default ContactList