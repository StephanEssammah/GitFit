import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Exercise from './subcomponents/Exercise'
import { useSelector, useDispatch } from 'react-redux'
import { setTitle, reset } from '../redux/name/newProgram.actions';

const AddExercises = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const newProgram = useSelector(state => state.newProgram)
  const exercisesList = useSelector(state => state.user.exercises)
 
  const [ programTitle, setProgramTitle ] = useState(newProgram.title)
  const [ exerciseList, setExerciseList] = useState()

  const handleCancelClick = () => {
    dispatch(reset())
    navigate('/')
  }

  const handleContinueClick = async () => {
    dispatch(setTitle(programTitle))
    navigate('/create-program/modify-program')
  }

  const createExercise = () => {
    dispatch(setTitle(programTitle))
    navigate('/create-program/create-exercise')
  }

  return (
    <>
      <input 
        type="text"
        value={programTitle}
        onChange={e => setProgramTitle(e.target.value)}
        placeholder="Program name"
      />
      <ul className="perform__mid">
        {exercisesList.map((exercise, index) => (
          <Exercise key={index} exerciseList={exerciseList} setExerciseList={setExerciseList} exercise={exercise}/>
        ))}
        <button onClick={createExercise}>Create new exercise</button>
        </ul>
    <div className="perform__buttons">
        <button onClick={handleCancelClick} className="btn btn--cancel">Cancel</button>
        <button onClick={handleContinueClick} className="btn btn--action">Continue</button>
    </div>
    </>
  )
}

export default AddExercises
