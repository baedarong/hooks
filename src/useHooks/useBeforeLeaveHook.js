import "./styles.css";
import React, { useEffect } from "react";

const useBeforeLeave = (onBefore) => {
  if (typeof onBefore !== "function") return;
  const handle = (event) => {
    const { clientY } = event; // console.log(current.event) 로 더 많은 내용 참고 가능
    if (clientY <= 0) onBefore();
  };
  useEffect(() => {
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
export default function useBeforeLeaveHook() {
  const dontLeave = () => console.log("Please dont leave this page!");
  useBeforeLeave(dontLeave);
  return (
    <div>
      <h1>Hello Strager!</h1>
    </div>
  );
}
