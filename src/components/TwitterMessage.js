import React from "react";

class TwitterMessage extends React.Component {
  
  // constructor() {
  //   super();
  //   this.state = {
  //     message: ''
  //   }
  // }
  state = {
    message: ''
  }

  handleChange = (e) => {
    console.log(e.target)
    // e.persist()
    this.setState(
      {
        message: e.target.value,
      }
    , ()=>console.log(this.state))
  }

  render() {
    let {maxChars} = this.props
    let charNumber = maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleChange(e)} value={this.state.message}/>
        <strong> {charNumber} Char left</strong>
      </div>
    );
  }
}

export default TwitterMessage;
