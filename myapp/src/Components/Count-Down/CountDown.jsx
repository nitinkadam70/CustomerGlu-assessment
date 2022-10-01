import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from '../../Styles/timer.module.css';
import TimerLimitInput from './TimerLimitInput';

//Reusable Count-Down component
const CountDown = () => {
  const timerId = useRef(null);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);
  // console.log(seconds, minutes);
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
    setMinutes(0);
    setHour(0);
  };

  useEffect(() => {
    if (seconds === 59) {
      setMinutes(minutes + 1);
      setSeconds(0);
    }
    if (minutes === 59 && seconds === 59) {
      setHour(1);
      setMinutes(0);
      setSeconds(0);
    }
  }, [seconds, minutes, hour]);

  //Clean Up Function
  //becouse whenever our component is unmounted then it reset this four value
  //1 - timerId.current = null;
  //2 - setSeconds(0);
  //3 - setMinutes(0);
  //4 -  setHour(0);
  useEffect(() => {
    return () => {
      clearInterval(timerId.current);
    };
  }, []);
  return (
    <div className={styles.countDown}>
      <TimerLimitInput />
      <h1>
        {hour}:{minutes}:{seconds}
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountDown;
