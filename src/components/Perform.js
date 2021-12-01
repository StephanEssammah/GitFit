import { useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import PerformArticle from './subcomponents/PerformArticle';
import Timer from './subcomponents/Timer';
import { setTotalTime } from '../redux/name/name.actions';
import RestTimer from './subcomponents/RestTimer';


const Perform = () => {
  const [timer, setTimer] = useState(0);
  const [session, setSession] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const el = useRef();

  const programs = location.state || null;

  const handleCancelClick = () => {
    navigate('/')
  }
  
  const handleFinishClick = () => {
    dispatch(setTotalTime(timer))
    navigate('/summary')
  }
  
  useEffect(() => {
    if(programs === null) {
      navigate('/')
    } 
  });

  return (
    <div className="perform">
      <header className="perform__header">
        <div className="perform__header__top">
          <div className="perform__header__top__info">
            <h1>Legday</h1>
            <Timer timer={timer} setTimer={setTimer}/>

          </div>
          <RestTimer />
        </div>
      </header>
      <div ref={el}>
        {programs && programs.exercises.map(exercise => <PerformArticle setSession={setSession} key={exercise.name} exercise={exercise} />)}
      </div>
      <div className="perform__buttons">
        <button onClick={handleCancelClick} className="btn btn--cancel">Cancel</button>
        <button onClick={handleFinishClick} className="btn btn--action">Finish</button>
      </div>
    </div>
  );
}

export default Perform;
