import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalTime } from '../../redux/name/user.actions';

const Timer = () => {
  const dispatch = useDispatch()
  const timer = useSelector(state => state.user.totalTime);
  
  const format = val => `0${Math.floor(val)}`.slice(-2);
  const hours = timer / 3600;
  const minutes = (timer % 3600) / 60;
  const time = [hours, minutes, timer % 60].map(format).join(':');

  useEffect(() => {
    const interval = setInterval(() => {  
      dispatch(setTotalTime((timer + 1)));
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [dispatch, timer]);

  return (
    <p>{time}</p>
  )
}

export default Timer
