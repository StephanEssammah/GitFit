import { useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import PerformArticle from './subcomponents/PerformArticle';
import Timer from './subcomponents/Timer';
import { setProgram } from '../redux/name/name.actions';
import RestTimer from './subcomponents/RestTimer';


const Perform = () => {
  const [timer, setTimer] = useState(0);
  const [session, setSession] = useState([]);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const el = useRef();

  const programs = location.state || navigate('/');

  const handleCancelClick = () => {
    navigate('/')
  }
  
  const handleFinishClick = () => {
    dispatch(setProgram({
      program: programs.title,
      date: Date.now(),
      exercises: session,
      totalTime: timer
    }))
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
        <div className="perform__header__info">
          {programs && <h1>{programs.title}</h1> }
          <Timer timer={timer} setTimer={setTimer}/>

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
