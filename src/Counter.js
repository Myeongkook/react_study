import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 11,
  };
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값{fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState((state) => {
              return { number: state.number + 1 };
            });
            this.setState(
              (state) => ({
                number: state.number + 1,
              }),
              () => {
                console.log("set State가 호출되었습니다.");
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
