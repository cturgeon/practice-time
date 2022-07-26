import { useState, useEffect } from "react";
import classes from "./Timer.module.css";

// while click pause
// just do minutes as editable

export default function TimerComponent(props) {
  const [timer, setTimer] = useState("00:00");
  const [countdownFlag, steCountdownFlag] = useState(false);
  const [timerLenth, TimerLenth] = useState(0);

  // TEST: to see if interval can be used
  // instead of setTimeout inside of useeffect
  setInterval(() => {
    // check if flagged to countdown
    // if so: decriment timer by 1 second
    if (!countdownFlag) {
      // not sure if return works here
      // I just want to not execute the following
      return;
    }
    if (timerLenth > 0) {
      // change setTimer to reflect current timer
      if (timer[-2] === "0") {
      }
    }
  }, 1000);

  const timerHandler = () => {};

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
