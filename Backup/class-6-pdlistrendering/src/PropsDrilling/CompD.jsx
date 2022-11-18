import React from 'react'
class CompD extends React.Component{
    render(){
        return <div>
            <h1>Component D</h1>
            <pre>{JSON.stringify(this.props)}</pre>
             <h3>Employee: {this.props.name}</h3>
        </div>
    }
}
export default CompD