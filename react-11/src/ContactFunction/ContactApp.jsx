import  {useEffect, useState} from 'react'
import ContactList from './ContactList'
import ContactDetails from './ContactDetails'
import Axios from 'axios'
let ContactApp=()=>{
    let [contact,setContact]=useState([])
    let [sel_Contact,setSel_Contact]=useState({})
   
    useEffect(()=>{
        Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
        .then((responce)=>{
            setContact(responce.data)
        })
        .catch()
        return()=>{
            console.log("UmMount")
        }
    },[])
     let user_Selected_Contact=(contact)=>{
              console.log(contact.name.first)
              setSel_Contact(contact)
    }
    return <div className="container mt-5">
        <pre>{JSON.stringify(contact)}</pre>
        <pre>{JSON.stringify(sel_Contact)}</pre>
        <h1>Contact App</h1>
        <div className="row">
            <div className="col-md-8">
                {
                    contact.length>0?<>
                    <ContactList user_Contacts={contact} selected_Contact={user_Selected_Contact}/>
    
                   
                    </>:null
                }
            </div>
            <div className="col-md-4">
                {
                    Object.keys(sel_Contact).length>0?<>
                     <ContactDetails user_Sel_Contact={sel_Contact}/>
                    </>:null               
                }
                   
            </div>
        </div>
    </div>
}
export default ContactApp
