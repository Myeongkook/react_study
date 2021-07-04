import React, { Component } from "react";
import "./ValidationSample.css";

class ValidationSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      clicked: false,
      validated: false,
    };
  }

  abc = React.createRef();
  onChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  };
  onClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000",
    });
    this.abc.current.focus();
  };
  render() {
    return (
      <div>
        <input
          type="password"
          value={this.state.password}
          onChange={this.onChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          ref={this.abc}
        />
        <button onClick={this.onClick}>확인</button>
      </div>
    );
  }
}

export default ValidationSample;
