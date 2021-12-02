import { useEffect } from 'react'

const Timer = ({ timer, setTimer }) => {
  const format = val => `0${Math.floor(val)}`.slice(-2);
  const hours = timer / 3600;
  const minutes = (timer % 3600) / 60;
  const time = [hours, minutes, timer % 60].map(format).join(':');

  useEffect(() => {
    const interval = setInterval(() => {  
      setTimer(prevValue => prevValue + 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    }
  }, [setTimer]);

  return (
    <p>{time}</p>
  )
}

export default Timer
