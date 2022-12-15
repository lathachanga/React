//combile reducer
import {combineReducers} from 'redux'
import {messageReducer} from './Message/Message.reducer'
import {productReducer} from './Product/Product.reducer'
let rootReducer=combineReducers({message:messageReducer,product:productReducer})
export {rootReducer}