import React from 'react'
class Employee extends React.Component{ 
       render(){
             return <div>
                <pre>{JSON.stringify(this.props)}</pre>
                <h1>user details:{this.props.user.name}</h1>
                <h1>Location:{this.props.loc[1]}</h1>
                <button class="btn btn-success">test details</button>
             </div>
       }

}
export default Employee