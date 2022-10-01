import React, { useEffect, useRef, useState } from 'react';

const Stopwatch = () => {
  const timerId = useRef();
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
  };
  const pause = () => {
    clearInterval(timerId.current);
    timerId.current = null;
  };
  const reset = () => {
    clearInterval(timerId.current);
    timerId.current = null;
    setSeconds(0);
  };

  //Clean Up Function
  //becouse whenever our component is unmounted then it reset this two value
  //1 - timerId.current = null;
  //2 - setSeconds(0);

  useEffect(() => {
    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  return { seconds, minutes, hour, start, pause, reset };
};

export default Stopwatch;
