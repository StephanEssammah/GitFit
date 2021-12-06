import { useEffect} from 'react';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '../redux/name/newProgram.actions';
import ModifyProgramExercise from './subcomponents/ModifyProgramExercise';



const ModifyProgram = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newProgram = useSelector(state => state.newProgram)
 

  const handleCancelClick = () => {
    dispatch(reset())
    navigate('/')
  }
  
  const handleFinishClick = () => {
    // SEND EXERCISELIST TO BACKEND
    /*
    await fetch('http://localhost:8080/user/addNewProgram', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(newProgram)
    })
    */
    console.log(newProgram)
    dispatch(reset())
    navigate('/')
  }
  
  useEffect(() => {
    if(newProgram === null) {
      navigate('/')
    }    
  }, []);

  return (
    <div className="perform">
      <header className="perform__header">
        <div className="perform__header__info">
          {newProgram && <h1>{newProgram.title}</h1> }
        </div>
      </header>
      <div>
        {newProgram && newProgram.exercises.map(exercise => <ModifyProgramExercise key={exercise.name} exercise={exercise} />)}
      </div>
      <button onClick={() => navigate('/create-program/add-exercises')}>Add exercises</button>
      <div className="perform__buttons">
        <button onClick={handleCancelClick} className="btn btn--cancel">Cancel</button>
        <button onClick={handleFinishClick} className="btn btn--action">Save Program</button>
      </div>
    </div>
  );
}

export default ModifyProgram;
