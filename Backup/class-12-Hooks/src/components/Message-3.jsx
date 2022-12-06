import React ,{useState} from 'react'
let Message=()=>{
    let [msg,setMsg]=useState("Srilatha")
    let [qty,setQty]=useState(0)
    let [contacts,setContacts]=useState([])
    let [emp,setEmp]=useState({})
    let gmHandler=()=>{
        setMsg("Good Morning")
    }
    let gnHandler=()=>{
        setMsg("Good Night")
    }
    return <div>
          <h1>{msg}</h1>
          <button onClick={gmHandler}>GM</button>
          <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message