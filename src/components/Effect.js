import { useState, useEffect } from "react";
export default function EffectTestComponent(props) {
  const [test, setTest] = useState(0);
  const [bool, setBool] = useState(false);
  useEffect(() => {
    setTest(test + 1);
  }, [bool]);
  const buttonHandler = () => {
    setBool(!bool);
  };

  return (
    <div>
      <h1>{test}</h1>
      <button onClick={buttonHandler}>click</button>
    </div>
  );
}
