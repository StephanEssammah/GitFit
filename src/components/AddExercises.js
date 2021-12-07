import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import Exercise from './subcomponents/Exercise'
import { useSelector, useDispatch } from 'react-redux'
import { setTitle, reset } from '../redux/name/newProgram.actions';
import CreateExercise from './CreateExercise';

const AddExercises = () => {
  const [isModal, setIsModal] = useState(false);
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
    setIsModal(true);
  }

  return (
    <>
      <div className="add-exercise">
        <input
          className="add-exercise__title"
          type="text"
          value={programTitle}
          onChange={e => setProgramTitle(e.target.value)}
          placeholder="Program name"
        />
        <ul className="add-exercise__list">
          {exercisesList && exercisesList.map((exercise, index) => (
            <Exercise key={index} exerciseList={exerciseList} setExerciseList={setExerciseList} exercise={exercise}/>
          ))}
          <button className="add-exercise__create btn" onClick={createExercise}>Create new exercise</button>
        </ul>
        
        {isModal && <CreateExercise setIsModal={setIsModal} />}
      </div>
      <div className="add-exercise__buttons">
        <button onClick={handleCancelClick} className="btn btn--cancel">Cancel</button>
        <button onClick={handleContinueClick} className="btn btn--action">Continue</button>
      </div>
    </>
  )
}

export default AddExercises
