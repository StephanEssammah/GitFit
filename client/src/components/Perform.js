import { useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import PerformArticle from './subcomponents/PerformArticle';
import Timer from './subcomponents/Timer';
import { setData } from '../redux/name/user.actions';
import RestTimer from './subcomponents/RestTimer';
import { calculateTotalVolume } from './utils/calculateTotalVolume';

const API = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080/'

const Perform = () => {
  const [session, setSession] = useState([]);
  const totalTime = useSelector(state => state.user.totalTime);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const el = useRef();

  const programs = location.state || navigate('/');

  const handleCancelClick = () => {
    navigate('/')
  }
  
  const handleFinishClick = async () => {
    const volume = calculateTotalVolume(session)

    const newSession = {
      program: programs.title,
      date: Date.now(),
      exercises: session,
      totalTime: totalTime,
      volume: volume
    }

    const activeUser = document.cookie.match(/=(.+)/);
    const response = await fetch(`${API}user/addSession`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          session: newSession,
          user: activeUser[1]
        })
      })

    const data = await response.json();
    dispatch(setData(data))
    navigate('/summary')
  }
  
  useEffect(() => {
    if (programs === null) {
      navigate('/')
    } 
  });

  return (
    <div className="perform">
      <header className="perform__header">
        <div className="perform__header__info">
          {programs && <h1>{programs.title}</h1> }
          <Timer />
        </div>
        <RestTimer />
      </header>
      <div ref={el}>
        {programs && programs.exercises.map(exercise => <PerformArticle program={programs.title} setSession={setSession} key={exercise.name} exercise={exercise} />)}
      </div>
      <div className="perform__buttons">
        <button onClick={handleCancelClick} className="btn btn--cancel">Cancel</button>
        <button onClick={handleFinishClick} className="btn btn--action">Finish</button>
      </div>
    </div>
  );
}

export default Perform;
