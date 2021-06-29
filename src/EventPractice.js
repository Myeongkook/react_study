import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
    username: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.message + this.state.username);
    this.setState({
      message: "",
      username: "",
    });
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="input test"
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="input test"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
