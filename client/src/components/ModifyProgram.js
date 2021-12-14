import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { reset, setEditProgram, setTitle } from '../redux/name/newProgram.actions';
import ModifyProgramExercise from './subcomponents/ModifyProgramExercise';

const API = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080/'

const ModifyProgram = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const newProgram = useSelector(state => state.newProgram)

  const handleCancelClick = () => {
    dispatch(reset())
    navigate('/')
  }
  
  const handleFinishClick = async () => {
    const activeUser = document.cookie.match(/=(.+)/);
    const finishedProgram = newProgram

    if (newProgram.programID) {
      await fetch(`${API}user/updateProgram`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        program: finishedProgram,
        user: activeUser[1]
      })
    })
    } else {
      await fetch(`${API}user/addProgram`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          program: finishedProgram,
          user: activeUser[1]
        })
      })
    }
    
    dispatch(reset())
    navigate('/')
  }
  
  useEffect(() => {
    if (newProgram === null) {
      navigate('/')
    }

    if (location.state) {
      dispatch(setEditProgram(location.state))
    }
        
  }, []);


  return (
    <div className="modify">
      <header className="modify__header">
        <input className="modify__title" type="text" onChange={e => dispatch(setTitle(e.target.value))} value={newProgram.title} /> 
      </header>
      <div>
        {newProgram && newProgram.exercises.map(exercise => <ModifyProgramExercise key={exercise.name} exercise={exercise} />)}
      </div>
      <button className="btn modify__btn__add-exercises" onClick={() => navigate('/create-program/add-exercises')}>Add exercises</button>
      <div className="modify__button__container">
        <button onClick={handleCancelClick} className="btn btn--cancel">Cancel</button>
        <button onClick={handleFinishClick} className="btn btn--action">Save Program</button>
      </div>
    </div>
  );
}

export default ModifyProgram;
