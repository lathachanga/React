import React from 'react'
import CompC from './CompC'
class CompB extends React.Component{
    render(){
        return <div>
            <h1>Component B</h1>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>Employee:{this.props.name}</h3>
            <hr/>
            <CompC name={this.props.name}/>
        </div>
    }
}
export default CompB