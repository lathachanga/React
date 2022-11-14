import React from 'react'
class Hero  extends React.Component{
     hero_Name="Bujji"
     age=20
     salary=450000
     render(){
        return <div>
        <h1>Hero Name:{this.hero_Name}</h1>
        <h1>age:{this.age}</h1>
        <h1>salary:{this.salary}</h1>
        </div>
     }
}
export default Hero
