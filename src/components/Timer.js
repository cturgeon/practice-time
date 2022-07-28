import { useState, useRef } from "react";
import classes from "./Timer.module.css";

// while click pause
// just do minutes as editable

export default function TimerComponent(props) {
  const [countdownFlag, setCountdownFlag] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(25);

  // TEST: to see if interval can be used
  // instead of setTimeout inside of useeffect
  const interval = setInterval(() => {
    // check if flagged to countdown
    // if so: decriment timer by 1 second
    if (!countdownFlag) {
      return;
    }
    if (seconds > 0) {
      setSeconds(seconds - 1);
    }
    if (seconds === 0) {
      if (minutes === 0) {
        setCountdownFlag(false);
        clearInterval(interval);
      } else {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
    }
  }, 1000);

  const timerHandler = () => {
    // could set to change the button from start to pause
    // and flip the bool
    setCountdownFlag(!countdownFlag);
  };

  return (
    <>
      <div className={classes.timer}>
        <h1>Timer Component</h1>
        <p>
          {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
        </p>
        <button onClick={timerHandler}>
          {!countdownFlag ? "Start" : "Pause"}
        </button>
      </div>
    </>
  );
}
