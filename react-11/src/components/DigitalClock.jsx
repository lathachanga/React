import React from 'react'
class DigitalClock extends React.Component{
    state={
        ct:new Date().toLocaleTimeString()
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({ct:new Date().toLocaleTimeString()})
        },[1000] )
    }
    componentWillUnmount(){
        console.log("Executing...")
    }
    render(){
        return <div>
         <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Digital Clock</h2>
                        </div>
                        <div className="card-body">
                            <h2>{this.state.ct}</h2>
                        </div>
                    </div>
                </div>
            </div>
         </div>
        </div>
    }
}
export default DigitalClock