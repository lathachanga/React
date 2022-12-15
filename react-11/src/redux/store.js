//how to create store?
import {createStore , applyMiddleware } from 'redux'
import {User_Reducer} from './User/User.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
let store=createStore(User_Reducer,composeWithDevTools(applyMiddleware(logger,thunk)))
export {store}