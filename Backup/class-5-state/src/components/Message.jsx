import React from 'react'
class Message extends React.Component{
    state={
        message:"Good morning"
    }
    gmHandler=()=>{
        this.setState({message:"GM Srilatha"})
    }
    gnHandler=()=>{
        this.setState({message:"GN Srilatha"})
    }
    render(){
        console.log("Render Method Executing")
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                       <div className="card-header bg-dark text-white"> 
                          <h4>Message Value:{this.state.message}</h4>
                       </div>
                       <div className="card-body"> 
                          <button  className="btn btn-success mr-2" onClick={this.gmHandler}>GM</button>
                          <button  className="btn btn-primary" onClick={this.gnHandler}>GM</button>
                       </div>
                    </div>
                   
           
                </div>
            </div>
            
        </div>
    }
}
export default Message