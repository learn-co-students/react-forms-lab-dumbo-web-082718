import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password: ""
    };
  }

  handleUsername = (event) =>{
    this.setState({
      username: event.target.value
    })
  }


  handlePassword = (event) =>{
    this.setState({
      password: event.target.value
    })
  }

  submit = (e)=>{
    e.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onSubmit(this.state);
    }
    }


  render() {
    return (
      <form onSubmit={this.submit} >
        <div>
          <label>
            Username
            <input id="username" value={this.state.username} onChange={this.handleUsername} name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} onChange={this.handlePassword} type="password" />
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
