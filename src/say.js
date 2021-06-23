import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("black");
  const onClickEnter = () => setMessage("안녕하세요!");
  const onClickLeaver = () => setMessage("안녕히가세요!");
  const redbutton = () => setColor("red");
  const bluebutton = () => setColor("blue");
  return (
    <div>
      <button onClick={onClickEnter}>출입</button>
      <button onClick={onClickLeaver}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={redbutton}>빨간맛</button>
      <button onClick={bluebutton}>파란맛</button>
    </div>
  );
};

export default Say;
