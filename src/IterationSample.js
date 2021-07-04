import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "park" },
    { id: 2, text: "1234" },
    { id: 3, text: "bba" },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [nextId, setNextId] = useState(4);
  const nextArr = names.map((v) => (
    <li key={v.id} onDoubleClick={() => onDoubleClick(v.id)}>
      {v.text}
    </li>
  ));
  const onChange = (e) => setInputValue(e.target.value);
  const onCick = () => {
    const tmp = names.concat({ id: nextId, text: inputValue });
    setNames(tmp);
    setInputValue("");
    setNextId(nextId + 1);
  };
  const onDoubleClick = (e) => {
    const sample = names.filter((v) => v.id !== e);
    setNames(sample);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add list..."
        value={inputValue}
        onChange={onChange}
      />
      <button onClick={onCick}>confirm</button>
      <ul>{nextArr}</ul>
    </div>
  );
};

export default IterationSample;
