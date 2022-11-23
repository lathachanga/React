import React from 'react'
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
   
    updateHandler=(event)=>{
            this.setState({
                [event.target.name]:event.target.value
            })
    }
    getdataHandler=(event)=>{
            event.preventDefault()
            console.log(this.state)
    }
    render(){
        return <>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.getdataHandler}>
            <label>Email Id</label>
            <input type="email"  onChange={this.updateHandler} name="email"/><br/><br/>
            <label>Password</label>
            <input type="password" onChange={this.updateHandler} name="password"/><br/><br/>
            <input type="submit" value="login"/>
        </form>
        </>
    }
}
export default Login