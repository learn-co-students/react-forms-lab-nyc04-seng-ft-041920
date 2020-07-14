import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "bloop",
      password: "bloop"
    };
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) {
      return
    }

    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input onChange={this.changeInput} id="username" name="username" type="text"
            value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.changeInput} id="password" name="password" type="password"
            value={this.state.password} />
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
