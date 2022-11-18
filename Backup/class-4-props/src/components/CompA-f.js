import CompB from './CompB'
let CompA=()=>{
   let eid=101;
   let ename="Srilatha"
    return <div>
        <h1>Component A</h1>
        <hr/>
        <CompB one={"gm"} eid={eid} ename={ename}/>
    </div>
}
export default CompA