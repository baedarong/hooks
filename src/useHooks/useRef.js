import "./styles.css";
import React, { useEffect, useState } from "react";

export default function useRef() {
  const refExample = useRef();
  setTimeout(()=>refExample.current.focus(), 5000);
  return (
    <div>
      <h1> "This is useTabs Hooks!" </h1>
      <input ref={refExample} placeholder="5초 후 자동 focused"></input> 
    </div>
  );
}
