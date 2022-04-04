import "./styles.css";
import React, { useEffect, useState } from "react";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const changeTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerHTML = title;
  };
  useEffect(changeTitle, [title]);
  return setTitle; // 변경되는 부분을 리턴하기 위해
};

export default function App() {
  const titleUptator = useTitle("Html Title Loading...");
  setTimeout(() => titleUptator("Title Changed!"), 5000);
  return (
    <div className="App">
      <h1> "This is useTabs Hooks!" </h1>
    </div>
  );
}
