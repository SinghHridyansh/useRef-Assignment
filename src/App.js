import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const handleStop = () => {
    if (intervalRef.current === null) return;
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  return (
    <div className="App">
      <h1>Timer:{time}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default App;
