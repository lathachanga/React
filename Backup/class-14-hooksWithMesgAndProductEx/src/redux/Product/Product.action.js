let INCR='INCR'
let DECR='DECR'

let incrAction=()=>{
    return {type:INCR, payload:{id:101,name:"sri" ,sal:40000}}
}
let decrAction=()=>{
    return {type:DECR, payload:{id:101,name:"sri" ,sal:40000}}
}
export {incrAction,decrAction,INCR,DECR}