import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {

    super(props);


    this.state = {
      message:"",
      remaining: props.maxChars
    }



  }


  changeEvent = (event) =>{
    this.setState({
      message:event.target.value
    },()=>{
      this.setState({
        remaining: this.props.maxChars - this.state.message.length
      })
    })


  }

  render() {

    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.changeEvent} value={this.state.message} type="text" />
        <small>You have {this.state.remaining} characters left.</small>
      </div>
    );
  }
}

export default TwitterMessage;
