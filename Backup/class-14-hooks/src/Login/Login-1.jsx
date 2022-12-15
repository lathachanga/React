import React,{useState} from 'react'
const Login=()=>{
    let [user,setUser]=useState({email:"",password:""})
   let emailHandler=(event)=>{
        console.log(event.target.value)
        setUser({ ...user,email:event.target.value})
    }
   let passwordHandler=(event)=>{
        setUser({...user,password:event.target.value})
    }
    return <div className="container mt-5">
        <pre>{JSON.stringify(user)}</pre>
             <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h1>Login Details</h1>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Email Id" onChange={emailHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder="Password" onChange={passwordHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="btn btn-success"  />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
    </div>
}
export default Login