import { useDispatch } from 'react-redux';
import { formatTime } from '../utils/formatTime';
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
    console.log('value', e.target.value)
    dispatch(setRestTime(exercise.name, e.target.valueAsNumber))
    setRest(e.target.valueAsNumber)
  }
    
  return (
    <article className="perform__mid">
      <div className="perform__mid__header">
        <h2 className="perform__mid____header__title">{exercise.name}</h2>
        <input type="number" onChange={handleRestChange} value={rest}/>
        {exercise.rest && <p className="perform__mid__header__default-time">{formatTime(exercise.rest)}</p>}  
      </div>
      <article>
        <header className="perform__grid">
          <h3>Set</h3>
          <h3>Previous</h3>
          <h3>Kg</h3>
          <h3>Reps</h3>
          <p></p>
        </header>
        {amountOfSets.map((__, index) => <ModifyProgramSet key={index} index={index}/>
        )}
      </article>
      {exercise.sets === 0 && <button className="btn" onClick={handleRemoveExercise}>Remove Exercise</button>}
      {exercise.sets > 0 && <button className="btn" onClick={handleRemoveSet}>Remove Set</button>}
      <button className="btn" onClick={handleAddSet}>Add Set</button>
    </article>
  );
}

export default ModifyProgramExercise;