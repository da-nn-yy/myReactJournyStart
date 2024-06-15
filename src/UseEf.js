import React from "react";
import { useState, useEffect } from "react";
export default function UseEf() {
  const BadStopWatch = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      setInterval(() => {
        setCount((c) => c + 0.1);
      }, 100);
    });
    return <div>Bad StopWatch: {count.toFixed(1)}</div>;
  };

  const GoodStopWatch = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((c) => c + 0.1);
      }, 100);
      return () => clearInterval(interval);
    });
    return <div>Good StopWatch: {count.toFixed(1)}</div>;
  };
  return (
    <div
      className="App"
      style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
    >
      <BadStopWatch />
      <GoodStopWatch />
    </div>
  );
}
