import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { formatTime } from '../utils/formatTime';

const RestTimer = () => {
  const [restTimer, setRestTimer] = useState('Timer');
  const [counter, setCounter] = useState(null);
  const [intervalId, setIntervalId] = useState(null);

  const stateRestTimer = useSelector(state => state.user.restTimer)
  
  const startTimer = () => {
    if(counter) return;
    const newIntervalId = setInterval(() => setCounter(prevCount => prevCount - 1), 1000);
    setIntervalId(newIntervalId);
  }

  const resetRestTimer = () => {
    clearInterval(intervalId)
    setIntervalId(null)
    setCounter(null)
    setRestTimer('Timer')
  }

  const handleDecrease = () => {
    setCounter(prevValue => {
      if(prevValue - 15 < 0) {
        clearInterval(intervalId)
        setIntervalId(null)
        setRestTimer('Timer')
        return null;
      }
      startTimer();
      return prevValue - 15;
    });
  }

  const handleIncrease = () => {
    setCounter(prevValue => prevValue + 30);
    startTimer();
  }

  useEffect(() => {
    if (counter === 0){
      clearInterval(intervalId)
      setRestTimer('Timer')
      return;
    }
    if (counter !== null) {
      const time = formatTime(counter)
      setRestTimer(time)
      return;
    }
  }, [counter, intervalId])

  useEffect(() => {
    if (stateRestTimer?.status === 'on') {
      setCounter(stateRestTimer.time)
      const newIntervalId = setInterval(() => setCounter(prevCount => prevCount - 1), 1000);
      setIntervalId(prevState => {
        clearInterval(prevState)
        return newIntervalId;
      });
    }

    return () => {
      setIntervalId(prevState => {
        clearInterval(prevState)
      })
    }
  }, [stateRestTimer]);
 

  return (
    <div className="rest-timer">
      <div className="rest-timer__btn rest-timer__btn--main">{restTimer}</div>
      <div className="rest-timer__options">
        <button onClick={handleDecrease} className="rest-timer__btn rest-timer__btn--minus">-15s</button>
        <button onClick={resetRestTimer} className="rest-timer__btn rest-timer__btn--skip">skip</button>
        <button onClick={handleIncrease} className="rest-timer__btn rest-timer__btn--plus">+30s</button>
      </div>
    </div>
  )
}

export default RestTimer;