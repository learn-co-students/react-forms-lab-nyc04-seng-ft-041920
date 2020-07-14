import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      // empty string
      message: ""
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          name="message"
          id="message"
          onChange={event => this.setState({
            message: event.target.value
          })}
          value={this.state.message}/>
          {/* console.log(this.state.message.length) */}
          <br/>
          {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;

// This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. This prop is being passed in from the App component with the value 280.
