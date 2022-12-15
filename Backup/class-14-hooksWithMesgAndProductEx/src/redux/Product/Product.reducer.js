import {INCR,DECR} from './Product.action'
let initialState={
    product_Name:"iphone",
    price:46000,
    image:"",
    qty:1
}
let productReducer=(state=initialState,action)=>{
        console.log(action)
        switch(action.type){
            case 'INCR':
                return {...state , qty: state.qty+1}
            case 'DECR':
                return {...state, qty: state.qty-1}
            default:
                return state
        }
}
export {productReducer}