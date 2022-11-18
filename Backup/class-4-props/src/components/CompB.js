import React from 'react';
class CompB extends React.Component{
          
            render(){
                return <div>
                    <h1>Component B class</h1>
                    <pre>{JSON.stringify(this.props)} </pre>
                    <h1>Employee Id:{this.props.eid}</h1>
                    <h2>Employee Name:{this.props.ename}</h2>
                    <h2>Employee Salary:{this.props.sal}</h2>
                </div>
            }
}
export default CompB