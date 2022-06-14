import React from "react";
import "./signup.css";
import { Component } from 'react'
import axios from 'axios'
export class SignUp extends Component {
 constructor() {
    super();
    this.state = {
      fullName: "",
      email: "",
      batchcode: "",
      pnumber: "",
      snumber:"",
    };
    this.changeFullName = this.changeFullName.bind(this)
    this.changeEmail = this.changeEmail.bind(this)
    this.changebatchcode = this.changebatchcode.bind(this)
    this.changepnumber = this.changepnumber.bind(this)
    this.changesnumber = this.changesnumber.bind(this)
    this.onSubmit =this.onSubmit.bind(this)
  }

  changeFullName(event) {
    this.setState({
      fullName: event.target.value,
    });
  }
  changeEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }
  changebatchcode(event) {
    this.setState({
      batchcode: event.target.value,
    });
  }
  
  changepnumber(event) {
    this.setState({
      pnumber: event.target.value,
    });
  }
  changesnumber(event) {
    this.setState({
      snumber: event.target.value,
    });
  }

  onSubmit(event){
    const registered = {
      fullName:this.state.fullName,
      email:this.state.email,
      batchcode:this.state.batchcode,
      pnumber:this.state.pnumber,
      snumber:this.state.snumber

    }
    axios.post("http://localhost:4000/app/signup",registered).then(response=>console.log(response.data))
    this.state({
      fullName: "",
      email: "",
      batchcode: "",
      pnumber: "",
      snumber:""
    })
     event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="form-div">
            <form onSubmit={this.onSubmit}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={this.changeFullName}
                value={this.state.fullName}
                className="form-control form-group"
              />
              
              <input
                type="text"
                placeholder="Email-address"
                onChange={this.changeEmail}
                value={this.state.email}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="batchcode"
                onChange={this.changebatchcode}
                value={this.state.batchcode}
                className="form-control form-group"
              />
               <input
                type="text"
                placeholder="Parent's Number"
                onChange={this.changepnumber}
                value={this.state.pnumber}
                className="form-control form-group"
              />
              <input
                type="text"
                placeholder="Stundent Number"
                onChange={this.changesnumber}
                value={this.state.snumber}
                className="form-control form-group"
              />
               
              <input
                type="submit"
                className="btn btn-danger btn-block"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
