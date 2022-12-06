import React from 'react'
let Message=()=>{
    let mesg="Hello"
    let gmHandler=()=>{
        mesg="GM"
    }
    let gnHandler=()=>{
        mesg="GN"
    }
    return <div>
            <h1>{mesg}</h1>
            <button onClick={gmHandler}>GM</button>
            <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message