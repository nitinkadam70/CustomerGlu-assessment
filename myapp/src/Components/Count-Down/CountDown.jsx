import React from 'react';
import { useState } from 'react';
import Stopwatch from '../../CustomHook/Stopwatch';
import styles from '../../Styles/timer.module.css';

const CountDown = () => {
  const [timerLimit, setTimerLimit] = useState(0);
  const { seconds, start, pause, reset } = Stopwatch(timerLimit);
  return (
    <div className={styles.countDown}>
      <h1> {seconds}</h1>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CountDown;
