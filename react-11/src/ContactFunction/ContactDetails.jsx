let ContactDetails=(props)=>{
    return <div className="container">
        <pre>{JSON.stringify(props)}</pre>
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="Card-header">
                            <img src={props.user_Sel_Contact.picture.large}/>
                        </div>
                        <div className="card-body">
                            <ul className="list-group">
                                <li className="list-group-item">{props.user_Sel_Contact.name.first}</li>
                                <li className="list-group-item">{props.user_Sel_Contact.name.last}</li>
                                <li className="list-group-item">{props.user_Sel_Contact.dob.age}</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
    </div>
}
export default ContactDetails