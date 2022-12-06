import React ,{useEffect} from 'react'
const Digital=()=>{
    let [ct,setCt]=React.useState(new Date().toLocaleTimeString())
    useEffect(()=>{
              setInterval(()=>{
                setCt(new Date().toLocaleTimeString())
              },[1000])
              return()=>{
                 console.log("UnMounting Time")
              }
         },[])
  
        return <div>
              <h1> {ct}</h1>
    </div>
}
export default Digital