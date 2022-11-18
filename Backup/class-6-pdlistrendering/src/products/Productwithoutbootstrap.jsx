import React from 'react'
class Product extends React.Component{
    state={
        qty:1
    }
    decrHandler=()=>{
        this.setState({qty:this.state.qty-1})
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty+1})
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>qty:{this.state.qty}</h3>
            <button onClick={this.decrHandler}>DECR</button>
            <button onClick={this.incrHandler}>INCR</button>
        </div>
    }
}
export default Product