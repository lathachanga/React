let CompB=(props)=>{
    return <div>
        <h2>Component B</h2>
        <pre>{JSON.stringify(props)}</pre>
        <h2>name:{props.one}</h2>
        <h3>salary:{props.two}</h3>
    </div>
}
export default CompB