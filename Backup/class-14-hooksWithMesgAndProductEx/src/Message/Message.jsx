import React from  'react'
import {gmAction,gnAction} from '../redux/Message/Message.action'
import {useDispatch,useSelector} from 'react-redux'
const Message=()=>{
    let dispatch= useDispatch();
    let mesg=useSelector((state)=>{
        return state.msg
    })
    let gmHandler=()=>{
        //view to action
        //dispatch an action
        console.log("First-view to action")
        dispatch(gmAction())
    }
    let gnHandler=()=>{
        dispatch(gnAction());
    }
    return <div>
          <pre>{JSON.stringify(mesg)}</pre>
          <h1>Message:{mesg}</h1>
          <button onClick={gmHandler}>GM</button>
          <button onClick={gnHandler}>GN</button>
    </div>
}
export default Message