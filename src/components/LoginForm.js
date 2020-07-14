import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  setUserName = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  setPassword = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // as long as neither of these are empty
    if (this.state.username !== "" && this.state.password !== "") {
    // having the curlybois around this... around this... give you the redundant nested block error send help
      this.props.handleLogin(this.state)
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              // this is going to change
              onChange={this.setUserName}
              value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              onChange={this.setPassword}
              value={this.state.password}/>
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

// Saving input values in state
//   1) should save the username in state when the input changes
//   2) should save the password in state when the input changes
// Calling `handleLogin` callback prop
//   3) should call the prevent the default action when the form is being submitted
//   ✓ should not call the `handleLogin` callback prop when the username and/or password fields are empty
//   4) should call the `handleLogin` callback prop when the form is being submitted
