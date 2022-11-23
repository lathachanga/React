import React from 'react'
class Login extends React.Component{
    state={
        email:" ",
        password:" "
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
        return <div className="container">
              <pre>{JSON.stringify(this.state)}</pre>
            <div className="row">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">
                            <h1>Login Details</h1>
                        </div>
                        <div className="card-body">
                           <form onSubmit={this.getdataHandler}>
                                <div className="form-group">
                                    <input type="email" className="form-control" placeholder="Email" onChange={this.updateHandler} name="email"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" onChange={this.updateHandler} name="password"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="form-control" value="login"/>
                                </div>
                            </form>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default Login