import { useState, useEffect } from 'react'

const RestTimer = () => {
  const [restTimer, setRestTimer] = useState('Timer');
  const [counter, setCounter] = useState(120);
  const [time, setTime] = useState();

  const clock = () => {
    const seconds = counter
    console.log(seconds)
    const format = val => `0${Math.floor(val)}`.slice(-2);
    const minutes = (seconds % 3600) / 60;
    const time = [minutes, seconds % 60].map(format).join(':');
    setRestTimer(time)
  }
  
  const startTimer = () => {
    clearInterval(time);
    
    setTime(setInterval(() => {
      setCounter(counter - 1)
      clock()
    }, 1000));
  }
 

  return (
    <button onClick={startTimer}className="perform__header__top__timer">{restTimer}</button>
  )
}

export default RestTimer;