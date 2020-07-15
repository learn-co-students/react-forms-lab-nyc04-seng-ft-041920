import React from "react";

class LoginForm extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {};
  // }
  
  state = {
    username: "",
    password: ""
  }

  handleInputChange =(e)=>{
    
    this.setState({
      username: e.target.value
    }, ()=> console.log(this.state))
  }

  handleInputPassword =(e)=>{
    
    this.setState({
      password: e.target.value
    }, ()=> console.log(this.state))
  }

  handleSubmit =(e)=>{
    e.preventDefault()
    if(this.state.username !== "" && this.state.password !== ""){
      this.props.handleLogin(this.state)
    }
    //if (!this.state.username || !this.state.password) return
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input 
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="password" 
              name="password" 
              type="password" 
              value={this.state.password}
              onChange={this.handleInputPassword}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
