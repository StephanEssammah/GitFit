import { useState, useEffect } from 'react'

const RestTimer = () => {
  const [restTimer, setRestTimer] = useState('Timer');
  const [counter, setCounter] = useState(120);
  const [intervalId, setIntervalId] = useState(0);
  
  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newIntervalId = setInterval(() => {
      setCounter(prevCount => prevCount - 1);
    }, 1000);
    setIntervalId(newIntervalId);
  }

  useEffect(() => {
    const seconds = counter;
    const format = val => `0${Math.floor(val)}`.slice(-2);
    const minutes = (seconds % 3600) / 60;
    const time = [minutes, seconds % 60].map(format).join(':');
    console.log(time);
    setRestTimer(time)
  }, [counter])
 

  return (
    <button onClick={handleClick}className="perform__header__top__timer">{restTimer}</button>
  )
}

export default RestTimer;