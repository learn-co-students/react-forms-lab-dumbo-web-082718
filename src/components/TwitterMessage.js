import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  handleChange = event => this.setState({ tweet: event.target.value })

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input name="tweet" type="text" onChange={this.handleChange} value={this.state.tweet}/>
        <p>Remaining Characters: {this.props.maxChars - this.state.tweet.length} </p>
      </div>
    );
  }
}

export default TwitterMessage;