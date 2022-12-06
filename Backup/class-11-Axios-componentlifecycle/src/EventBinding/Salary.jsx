import React from 'react'
class Salary extends React.Component{
    state={
        salary:400000
    }
    hike50kHandler=()=>{
        this.setState({salary:this.state.salary + 50000})
    }
    hike100kHandler=()=>{
        this.setState({salary:this.state.salary + 100000})
    }
    hike_NoHandler=()=>{
        this.setState({salary:this.state.salary + 0})
    }
    render(){
        return <div>
                <h2>Employee Salary:{this.state.salary}</h2>
                <button onClick={this.hike50kHandler}>Hike 50k</button>
                <button onClick={this.hike100kHandler}>Hike 100k</button>
                <button onClick={this.hike_NoHandler}>Hike- No</button>
        </div>
    }
}
export default Salary