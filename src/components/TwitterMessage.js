import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {textValue:'', remainingChars:this.props.maxChars};
  }

  handleChange=(event)=>{
    this.setState({textValue:event.target.value, remainingChars:this.state.remainingChars-1})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>{this.state.remainingChars} characters remining</p>
        <input type="text" value={this.state.textValue} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
