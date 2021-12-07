import { useDispatch } from 'react-redux';
import ModifyProgramSet from './ModifyProgramSet';
import { addSet, removeSet, exerciseRemove, setRestTime } from '../../redux/name/newProgram.actions';
import { useState } from 'react'

const ModifyProgramExercise = ({ exercise }) => {
  const dispatch = useDispatch();
  const amountOfSets = Array.from({length: exercise.sets});
  const [rest, setRest] = useState(60)

  const handleAddSet = () => {
    dispatch(addSet(exercise.name))
  }

  const handleRemoveSet = () => {
    dispatch(removeSet(exercise.name))
  }

  const handleRemoveExercise = () => {
    dispatch(exerciseRemove(exercise.name))
  }

  const handleRestChange = (e) => {
    dispatch(setRestTime(exercise.name, e.target.valueAsNumber))
    setRest(e.target.valueAsNumber)
  }
    
  return (
    <article className="modify-item">
      <div className="modify-item__header">
        <h2 className="modify-item__title">{exercise.name}</h2>
        <label className="modify-item__time-label">
          Rest timer: 
          <input className="modify-item__time-input" size="1" max="999" type="number" onChange={handleRestChange} value={rest}/>
          seconds
        </label>
      </div>
      <article>
        <header className="modify__grid">
          <h3>Set</h3>
          <h3>Previous</h3>
          <h3>Kg</h3>
          <h3>Reps</h3>
          <p></p>
        </header>
        {amountOfSets.map((__, index) => <ModifyProgramSet key={index} index={index}/>)}
      </article>
      <div className="modify-item__set-buttons-container">
        {exercise.sets === 0 && <button className="btn modify-item__set-buttons-container__button--delete modify-item__set-buttons-container__button" onClick={handleRemoveExercise}>Remove Exercise</button>}
        {exercise.sets > 0 && <button className="btn modify-item__set-buttons-container__button" onClick={handleRemoveSet}>- Remove Set</button>}
        <button className="btn modify-item__set-buttons-container__button" onClick={handleAddSet}>+ Add Set</button>
      </div>
    </article>
  );
}

export default ModifyProgramExercise;