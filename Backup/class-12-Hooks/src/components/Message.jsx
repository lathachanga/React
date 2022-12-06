import React ,{useState} from 'react'
let Message=()=>{
    let [msg,setMsg]=useState("Bujji")
    return <div>
        <h1>{msg}</h1>
        <button onClick={()=>{
            setMsg("Good Morning")
        }}>GM</button>
        <button onClick={()=>{
            setMsg("Good Night")
        }}>GN</button>
    </div>
}
export default Message