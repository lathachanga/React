import React from 'react'
class Message extends React.Component{
    message="hello"
    gmHandler=()=>{
        this.message="Srilatha"
        console.log("Test Case 123")
        console.log(this.message)
        this.forceUpdate()
    }
    render(){
        return <div>
               <h1>Message value:{this.message}</h1>
                <button  class="btn btn-success "onClick={this.gmHandler}>GM</button>
               
        </div>
    }
}
export default Message