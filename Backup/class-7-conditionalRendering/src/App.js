import React from 'react'
import Navbar from './Navbar/Navbar'
import Login from './components/Login'
import Location from './components/Location'
class App extends React.Component{
    render(){
        return <div>
               <Navbar/>
               <Location/>
        </div>
    }
}
export default App