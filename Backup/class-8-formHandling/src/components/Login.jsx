import React from 'react'
class Login extends React.Component{
    state={
        email:"",
        password:""
    }
    emailHandler=(event)=>{
            this.setState({
                 email:event.target.value
            })
    }
    passwordHandler=(event)=>{
            this.setState({
                password:event.target.value
            })
    }
    getdataHandler=(event)=>{
            event.preventDefault()
    }
    render(){
        return <>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.getdataHandler}>
            <label>Email Id</label>
            <input type="email"  onChange={this.emailHandler}/><br/><br/>
            <label>Password</label>
            <input type="password" onChange={this.passwordHandler}/><br/><br/>
            <input type="submit" value="login"/>
        </form>
        </>
    }
}
export default Login