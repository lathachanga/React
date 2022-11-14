import React from 'react'
class Message extends React.Component{
      constructor(props){
        super(props)
        console.log("First Constructor");
      }
      render(){
        console.log("Second render method");
        return <div>
           <h1>Hello,GM</h1>
           <h1>Hello,GA</h1>
            <h1>Hello,GN</h1>
        </div>
      }
}
export default Message