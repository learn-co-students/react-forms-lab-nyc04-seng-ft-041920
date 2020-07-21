import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState ({
      [event.target.name]: event.target.value
    })
  }

  charsLeft = () => {
    return (this.props.maxChars - this.state.message.length)
    
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.handleChange(event)} name="message" id="message" value={this.state.message} />
        <p> {this.charsLeft()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
