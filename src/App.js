import { useState } from "react";
import "./App.css";

function App() {
  const [timerCountdown, setTimerCountdown] = useState(0);

  return (
    <>
      <div>
        <h1>Set a timer</h1>
        <p>{timerCountdown}</p>
        <button>clikjkjkc</button>
      </div>
    </>
  );
}

export default App;
