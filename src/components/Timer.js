import { useState } from "react";
import classes from "./Timer.module.css";

export default function TimerComponent(props) {
  const [timer, setTimer] = useState(0);
  return (
    <>
      <div className={classes.timer}>
        <h1>Timer Component</h1>
        <p>{timer}</p>
      </div>
    </>
  );
}
