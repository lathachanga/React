//what is store? redux store? - global store or collection of states
//how to create store?
//what basis we are creating store ie reducer
import {createStore} from 'redux'
import {rootReducer} from './rootReducer'
import {composeWithDevTools} from '@redux-devtools/extension'
let store= createStore(rootReducer,composeWithDevTools());
export {store}
