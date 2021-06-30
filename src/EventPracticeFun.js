import React, { useState } from "react";

const EventPracticeFun = () => {
  const [Form, setForm] = useState({
    message1: "",
    message2: "",
  });
  const { message1, message2 } = Form;

  const onChangeEvent = (e) => {
    const nextForm = {
      ...Form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClickEvent = () => {
    alert(message1 + message2);
    setForm({
      message1: "",
      message2: "",
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="input test"
        name="message1"
        value={message1}
        onChange={onChangeEvent}
      />
      <input
        type="text"
        placeholder="input test"
        name="message2"
        value={message2}
        onChange={onChangeEvent}
      />
      <button onClick={onClickEvent}>확인</button>
    </div>
  );
};

export default EventPracticeFun;
