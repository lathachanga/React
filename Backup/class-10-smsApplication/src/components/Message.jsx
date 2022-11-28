import React from 'react'
class Message extends React.Component{
   constructor(props){
          super(props)
        this.state={
            maxlimit:100,
            count:100
   }
 
   }
   updateCount=(event)=>{
      this.setState({  count:this.state.maxlimit-event.target.value.length})
        
   }
   render(){
      return <div>
         <pre>{JSON.stringify(this.state)}</pre>
              <div className="container mt-5">
                  <div className="row">
                     <div className="col-md-6">
                        <div className="card">
                           <div className="card-header bg-dark text-white">
                             <h3>SMS Application</h3>
                           </div>
                           <div className="card-body">
                               <form>
                                 <div className="form-group">
                                    <textarea className="form-control" maxLength={this.state.maxlimit} onChange={this.updateCount} rows="4" placeholder="Enter Message Here"/>
                                 </div>
                               </form>
                           </div>
                           <div clasName="card-footer">
                                <h4>Remaining Characters:<span className="font-weight-bold">{this.state.count}</span></h4>
                           </div>
                        </div>
                     </div>
                  </div>
              </div>
      </div>
   }
}
export default Message
