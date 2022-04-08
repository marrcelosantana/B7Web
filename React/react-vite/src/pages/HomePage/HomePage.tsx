import { useState } from "react";
import "./HomePage.css";

export default function HomePage () {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1)
  }

  return (
    <div className="container">
      <button onClick={increment}>Increment: {count}</button>
    </div>
  );
}