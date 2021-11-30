import { useRef, useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import PerformArticle from './subcomponents/PerformArticle';

const Perform = () => {
  const [ session, setSession ] = useState([])
  const location = useLocation();
  const navigate = useNavigate();
  const el = useRef();
  const programs = location.state || null;

  const handleCancelClick = () => {
    navigate('/')
  }
  
  const handleFinishClick = () => {
    console.log(session)
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
          <h1>Legday</h1>
          <button>Timer</button>
        </div>
        <p>46:29</p>
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
