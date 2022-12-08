import React,{useState} from 'react'
const Login=()=>{
    let [user,setUser]=useState({email:"",password:""})
    let updateHandler=(event)=>{
          setUser({...user,[event.target.vlaue]:event.target.value})
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
                                    <input type="text" className="form-control" name="email" placeholder="Email Id" onChange={updateHandler}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" name="password" placeholder="Password" onChange={updateHandler}/>
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