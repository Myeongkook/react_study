import React, { useState } from "react";

const MyComponent = () => {
  const [Message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const helloHandler = () => setMessage("안녕");
  return (
    <div>
      <button onClick={helloHandler}>입장</button>
      <button onClick={() => setMessage("안녕히가세요")}>퇴장</button>
      <br />
      <h1 style={{ color }}>{Message}</h1>
      <br />
      <button onClick={() => setColor("green")}>초록색</button>
      <button onClick={() => setColor("orange")}>주황색</button>
      <button
        onClick={() => {
          setColor("red");
          console.log({ color });
        }}
      >
        빨간색
      </button>
    </div>
  );
};

export default MyComponent;
