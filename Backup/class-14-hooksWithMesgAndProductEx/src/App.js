import React from 'react'
import Message from './Message/Message'
import Product from './Products/Product'
import {store} from '../../../react-11/src/redux/store'
import {Provider} from 'react-redux'
const App=()=>{
    return <div>
        <Provider store={store}>  
            <nav className="navbar navbar-dark bg-dark">
               <a href="#" className="navbar-brand">React Redux</a>
            </nav>
            <h1>App Component</h1>
            <hr/>
            <Product/>
            <Message/>
       </Provider>     
    </div>
}
export default App