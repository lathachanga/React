import React from 'react'
import Navbar from './Navbar/Navbar'
import UserApp from './User/UserApp'
class App extends React.Component{
  render(){
    return <div>
           <Navbar/>
           <UserApp/>
    </div>
  }


}
export default App