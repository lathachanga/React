import React from 'react'
import Footer from'./Footer'
class Contact extends React.Component{
  state={
    name:"",
    email:"",
    number:"",
    message:""

  }
  updateHandler=(event)=>{
    this.setState({
        [event.target.name]:event.target.value
    })
}
getdataHandler=(event)=>{
    event.preventDefault()
    console.log(this.state)
}
    render(){
        return <div>
           
            <section>
         
              <div class="container mt-5">
                <div class="row">
                  
                    <div className="col-md-8 ">
                             <p><b> Contact Us</b></p>
                             <form onSumbit={this.getdataHandler}>
                             <div className="form-group">
                             <label>Name:</label>
                             <input type="text" className="form-control" placeholder=" Enter your name here" onChange={this.updateHandler} name="name"/>
                             </div>
                             <div className="form-group">
                             <label>Email:</label>
                             <input type="email" className="form-control" placeholder=" Enter your email here" onChange={this.updateHandler} name="email"/>
                             </div>
                             <div className="form-group">
                             <label>Number:</label>
                             <input type="number" className="form-control" placeholder=" Enter your number here" onChange={this.updateHandler}  name="number"/>
                             </div>
                             <div className="form-group">
                             <label>Message:</label>
                             <textarea placeholder="Enter Message Here" className="form-control" rows="5" cols="50" onChange={this.updateHandler} name="text"></textarea>
                             </div>
                             <button className="btn btn-success ">Subscribe</button>
                             </form>
                            
                    </div>
                    <div className="col-4 mt-5">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61813.41501026904!2d79.98171661262455!3d14.465245482179117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4c8cc06fb60447%3A0xd72f457d10dcb852!2sSri%20Thalpagiri%20Ranganadha%20Swamy%20Temple!5e0!3m2!1sen!2sin!4v1663825867710!5m2!1sen!2sin" width="400" height="400"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
              </div>
            </section>
            <Footer/>
        </div>
    }
}
export default Contact