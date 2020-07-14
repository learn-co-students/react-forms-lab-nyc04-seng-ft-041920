import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();
    
    this.state = {
      message: ''
    };
  }

  handleInput = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  render() {
    const maxChars = this.props.maxChars
    let charCount =  maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleInput} type="text" name="message" 
        id="message" value={this.state.message} />
        {charCount}
      </div>
    );
  }
}

export default TwitterMessage;
