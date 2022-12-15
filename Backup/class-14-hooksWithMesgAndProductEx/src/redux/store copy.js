//what is store? redux store? - global store or collection of states
//how to create store?
//what basis we are creating store ie reducer
import {createStore} from 'redux'
import {messageReducer} from './Message/Message.reducer'
import {productReducer} from './Product/Product.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'
let store= createStore(productReducer,composeWithDevTools())
export {store}
