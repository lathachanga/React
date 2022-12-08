import React ,{useReducer} from "react"
let initialState={
    message:"Hello"
}
let reducer=(state=initialState, action)=>{
           switch(action.type){
            case 'GM':
                return {message:"Good Morning"}
            case 'GA':
                return {message:"Good Afternoon"}
            case 'GN':
                return {message:"Good Night "}
           }
}
const MessageEx=()=>{
    let [state,dispatch]=useReducer(reducer,initialState)
    return <div className="container mt-5">
             <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>{state.message}</h3>
                        </div>
                        <div classname="card-body">
                            <button  onClick={()=>{dispatch({type:"GM"}) }} className="btn btn-success mr-2 ">GM</button>
                            <button  onClick={()=>{dispatch({type:"GA"}) }} className="btn btn-primary mr-2">GA</button>
                            <button  onClick={()=>{dispatch({type:"GN"})}}  className="btn btn-warning">GN</button>
                        </div>
                    </div>
                </div>
             </div>
    </div>
}
export default MessageEx