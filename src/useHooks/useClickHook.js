import "./styles.css";
import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  if (typeof onClick !== "function") return; // 예외처리
  useEffect(() => {
    if (element.current) element.current.addEventListener("click", onClick);
    //DidMount 1번 호출
    return () => {
      if (element.current)
        element.current.removeEventListener("click", onClick);
    };
    // Unmount 1번 호출
  }, []);

  return element;
};

export default function useClickHook() {
  const title = useClick(console.log("h1h1h1"));
  return (
    <div className="useClickHook">
      <h1 ref={title}> Hello hook world! </h1>
    </div>
  );
}
