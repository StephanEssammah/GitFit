import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { exerciseAdd, exerciseRemove } from '../../redux/name/newProgram.actions'

const Exercise = ({exercise}) => {
  const dispatch = useDispatch()
  const exercises = useSelector(state => state.newProgram.exercises)

  const exerciseNames = exercises.map(exercise => exercise.name)
  const initChecked = exercises ? exerciseNames.includes(exercise.name) : false
  const [isChecked, setIsChecked] = useState(initChecked)
  

  const handleCheck = () => {
    if (isChecked) {
      dispatch(exerciseRemove(exercise.name))
      return setIsChecked(false);
    }
    setIsChecked(true)
    dispatch(exerciseAdd({name: exercise.name, type: 'reps', rest: 60, sets: 1 }))
  }

  return (
    <li className={`add-exercise__grid ${isChecked ? 'done' : ''}`}>
      <p className="add-exercise__grid__name">{exercise.name}</p>
      <input 
        size="1" 
        onChange={handleCheck} 
        className="add-exercise__input-checkbox" 
        type="checkbox"
        checked={isChecked}
      />
    </li>
  )
}

export default Exercise
