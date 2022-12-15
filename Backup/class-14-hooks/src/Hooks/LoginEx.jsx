import React,{useRef,useState} from 'react'
const Login=()=>{
    let buttonTag=useRef(null)
    let [terms,setTerms]=useState(false)
    let acceptHandler=(event)=>{
        setTerms(event.target.checked)
       // buttonTag.current.disabled= !event.target.checked
       if(event.target.checked===true){
            buttonTag.current.disabled=false
        }else{
            buttonTag.current.disabled=true
        }
    }
    return <div className="container mt-5">
        <pre>{JSON.stringify(terms)}</pre>
             <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Email" className="form-control"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control"/>
                                </div>
                                <div className="form-check">
                                    <input type="checkbox"  onClick={acceptHandler} className="form-input-check"/>Please accept Terms & Conditions
                                </div>
                                <div className="form-group">
                                    <input type="submit" ref={buttonTag} className="btn btn-success" disabled/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
    </div>
}
export default Login