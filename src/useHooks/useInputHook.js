import "./styles.css";
import React, { useState } from "react";
// import ReactDOM from "react-dom";

const useInput = (initialvalue, validator) => {
  const [value, setValue] = useState(initialvalue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event; // event 값으로 value를 가져온다는 뜻입니다.
    let keepGoing = true;
    if (typeof validator === "function") keepGoing = validator(value); // T F
    if (keepGoing) {
      setValue(value); // 10자 이내일 때만 변경이 가능.
    }
  };
  return { value, onChange };
};

export default function useInputHook() {
  const checkLeng = (text) => text.length < 10;
  const name = useInput("Ms.", checkLeng);

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      {/* <input placeholder={name.value} onChange={name.onChange} /> */}
      <input placeholder="name" {...name} />
    </div>
  );
}
