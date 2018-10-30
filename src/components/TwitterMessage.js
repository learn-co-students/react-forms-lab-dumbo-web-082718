import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  render() {
    console.log(this.state.message.length)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} onChange={ e=>this.setState({message:e.target.value})}/>
        <p>remainining:{this.props.maxChars-this.state.message.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
