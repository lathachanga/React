//import Action types
import {USER_REQ ,USER_SUCCESS, USER_FAIL} from './User.action'
let initialState={
    user:[],
    message:""
}
let User_Reducer=(state=initialState, action)=>{
        console.log("Five-Test Case 5")
        let {type,payload}= action;
        switch(type){
            case 'USER_REQ':
                return {...state}   
            case 'USER_SUCCESS':
                return {...state, user : payload }  
            case 'USER_FAIL':
                return {...state , message:payload}
            default:
                return state
        }
}
export {User_Reducer}