import React from 'react';
import { useState, useRef, useEffect } from 'react';
import styles from '../../Styles/countdown.module.css';

//Reusable Count-Down component
const CountDown = (props) => {
  const { status, timeLimit } = props;
  const timerId = useRef(null);
  const [seconds, setSeconds] = useState(timeLimit.seconds);
  const [minutes, setMinutes] = useState(timeLimit.minutes);
  const [hour, setHour] = useState(timeLimit.hour);

  const start = () => {
    if (!timerId.current) {
      timerId.current = setInterval(() => {
        setSeconds((seconds) => seconds - 1);
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
    if (seconds === 1) {
      setMinutes(minutes - 1);
      setSeconds(59);
    }
    if (minutes === 1 && seconds === 1) {
      setMinutes(59);
      setSeconds(59);
      setHour(hour - 1);
    }
    if (status == 'PLAY') {
      start();
    }
    if (status == 'PAUSE') {
      pause();
    }
  }, [seconds, minutes, hour, status]);

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
      <div>
        <h4>{hour ? hour : '00'}</h4>
        <p>h</p>
      </div>
      <div>
        <h4>{minutes ? minutes : '00'}</h4>
        <p>m</p>
      </div>
      <div>
        <h4>{seconds ? seconds : '00'}</h4>
        <p>s</p>
      </div>
    </div>
  );
};

export default CountDown;
