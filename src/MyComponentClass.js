import React, { Component } from "react";

class MyComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
      message: "",
      level: 0,
    };
  }

  render() {
    const { color, message, level } = this.state;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ message: "안녕하세요" });
          }}
        >
          입장
        </button>
        <button
          onClick={() => {
            this.setState({ message: "안녕히가세요" });
          }}
        >
          퇴장
        </button>
        <br />
        <h1 style={{ color }}>{message}</h1>
        <br />
        <strong>{level}</strong>
        <button
          onClick={() =>
            this.setState(
              (prev) => ({ level: prev.level + 2 }),
              console.log({ level })
            )
          }
        >
          level up
        </button>
        <br />
        <button
          onClick={() => {
            this.setState({ color: "green" });
          }}
        >
          초록색
        </button>
        <button
          onClick={() => {
            this.setState({ color: "orange" });
          }}
        >
          주황색
        </button>
        <button
          onClick={() => {
            this.setState({ color: "red" });
          }}
        >
          빨간색
        </button>
      </div>
    );
  }
}

export default MyComponentClass;
