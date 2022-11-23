import React from 'react'
class Location extends React.Component{
    state={
        banglore:false,
        chennai:false,
        hyderabad:false
    }
    bangloreHandler=()=>{
        this.setState({banglore: !this.state.banglore})
    }
    chennaiHandler=()=>{
        this.setState({chennai: !this.state.chennai})
    }
    hyderabadHandler=()=>{
        this.setState({hyderabad: !this.state.hyderabad})
    }
    render(){
        return  <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                      <div>
                        <input type="checkbox" onInput={this.bangloreHandler}/>banglore
                      </div>
                      <div>
                        <input type="checkbox" onInput={this.chennaiHandler}/>chennai
                      </div>
                      <div>
                        <input type="checkbox" onInput={this.hyderabadHandler}/>hyderabad
                      </div>
                </div>
                <div className="cd-md-8">
                  {
                    this.state.banglore?<><div className="card-body bg-dark text-white" >
                        <p>Bengaluru (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, the city is also known for its parks and nightlife. By Cubbon Park, Vidhana Soudha is a Neo-Dravidian legislative building. Former royal residences include 19th-century Bangalore Palace, modeled after England’s Windsor Castle, and Tipu Sultan’s Summer Palace, an 18th-century teak structure</p>
                    </div>
                    </>: null
                  }
                  {
                    this.state.chennai?<><div className="card-body bg-warning text-white" >
                        <p>Chennai (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry, </p>
                    </div>
                    </>: null
                  }
                  {
                    this.state.hyderabad?<><div className="card-body bg-danger text-white" >
                        <p>Hyderbad (also called Bangalore) is the capital of India's southern Karnataka state. The center of India's high-tech industry</p>
                    </div>
                    </>: null
                  }
                </div>
                
            </div>
        </div>

       
    }
}
export default Location