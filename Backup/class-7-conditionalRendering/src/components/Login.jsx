import React from 'react'
class Login extends React.Component{
    state={
        isLogin:false,
        message:"Hello...."
    }
    loginHandler=()=>{
        this.setState({
            isLogin:true,
            message:"welcome to React World"})
    }
    logoutHandler=()=>{
       this.setState({
        isLogin:false ,
        message:"Visit Again"}) 
    }
    render(){
        return <div className="container mt-5">
            <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                        {
                          !this.state.isLogin ? <button  className="btn btn-success mr-3" onClick={this.loginHandler}> Login</button> :<button onClick={this.logoutHandler} className="btn btn-warning">Logout</button>
                        }
                        </div>
                        <div className="card-body">
                            <h4>{this.state.message}</h4>
                        </div>
                      
                    </div>
                </div>
            </div>
        </div>

       
    }
}
export default Login