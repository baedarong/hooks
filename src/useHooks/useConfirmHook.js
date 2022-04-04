import "./styles.css";
import React from "react";

const useConfirm = (message = "", callback, rejection) => {
  if (typeof callback !== "function" || typeof rejection !== "function") {
    return; // 함수형 프로그래밍 잊지 말기
  }
  const alertAction = () => {
    if (confirm(message)) callback();
    else rejection();
  };
  return alertAction;
};

export default function useConfirmHook() {
  const OkMessage = () => console.log("Press OK button !");
  const AbortMessage = () => console.log("Press Abort Button!");
  const { alert } = useConfirm("Press Any Button", OkMessage, AbortMessage);
  return (
    <div className="useConfirmHook">
      <button onClick={alert}> Hello hook world! </button>
    </div>
  );
}
