import React from 'react'
class Salary extends React.Component{
    state={
        salary:40000
    }
    updateHandler=(hike)=>{
        this.setState({salary: this.state.salary + hike})
    }
    render(){
        return <div>
              <h1>Employee Salary:{this.state.salary}</h1>
              <button onClick={this.updateHandler.bind(this,50000)}>hike 50k</button>
              <button onClick={this.updateHandler.bind(this,100000)}>hike 100k</button>
              <button onClick={this.updateHandler.bind(this,0)}>hike -No</button>
        </div>
    }
}
export default Salary