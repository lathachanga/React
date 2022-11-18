import React from 'react'
class Message extends React.Component{
    state={
        message:"Hello...."
    }
    gmHandler=()=>{
        this.setState({message:"Good Morning Srilatha"})
    }
    gnHandler=()=>{
        this.setState({message:"Good Night Srilatha"})
    }
    render(){
        console.log("Render Method Executing")
        return <div>
            <h1>Message Value:{this.state.message}</h1>
            <button onClick={this.gmHandler}>GM</button>
           <button onClick={this.gnHandler}>GN</button>
        </div>
    }
}
export default Message