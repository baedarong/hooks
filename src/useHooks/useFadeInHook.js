import "./styles.css";
import React, { useEffect, useRef } from "react";

export const useFadeIn = (duration = 1, delay = 0) => {
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  return { ref: element, style: { opacity: 0 } };
};
export default function App() {
  const FadeInF1 = useFadeIn(3, 5);
  const FadeInDiv = useFadeIn(5, 7);
  return (
    <div>
      <h1 {...FadeInF1}>Hello Strager!</h1>
      <div {...FadeInDiv}> dummy text dummy text dummy text </div>
    </div>
  );
}
