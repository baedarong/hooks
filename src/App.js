import "./styles.css";
import React, { useState } from "react";

const SampleData = [
  {
    tab: "Tab Number 0",
    content: "Tab Content of number 0"
  },
  {
    tab: "Tab Number 1",
    content: "Tab Content of number 1"
  }
];

const useTabs = (initialvalue, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) return; // 예외처리
  const [currentIndex, setCurrentIndex] = useState(initialvalue);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

export default function App() {
  const { currentItem, changeItem } = useTabs(0, SampleData);
  return (
    <div className="App">
      <h1> "This is useTabs Hooks! (Customed)" </h1>
      {SampleData.map((value, index) => (
        <button onClick={() => changeItem(index)}> {value.tab} </button>
      ))}
      <div> {currentItem.content} </div>
    </div>
  );
}
