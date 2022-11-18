import React from 'react'
import CompB from './CompB'
class CompA extends React.Component{
         eid=101;
         ename="Joshna";
         salary=45000;
         render()
          {
             return  <div>
             <h1>Component A class </h1>
             <hr/>
             <CompB eid={this.eid} ename={this.ename} sal={this.salary} />
             </div>
         }

}
export default CompA