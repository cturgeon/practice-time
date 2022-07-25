import { useState, useEffect } from "react";
import classes from "./Timer.module.css";

// while click pause
// just do minutes as editable

export default function TimerComponent(props) {
  const [timer, setTimer] = useState("00:00:00");
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {}, []);

  const timerHandler = () => {
    //
  };

  return (
    <>
      <div className={classes.timer}>
        <h1>Timer Component</h1>
        <p>{timer}</p>
        <button onClick={timerHandler}>Start</button>
      </div>
    </>
  );
}
