import React, { useRef, useState } from 'react';
import PerformSet from './PerformSet';

const PerformArticle = ({ exercise, setSession }) => {
  const amountOfSets = Array.from({length: exercise.sets});
  const initialState = amountOfSets.map(() => {
    return {weight: '', reps: ''}
  })
  const [ weightReps, setWeightReps ] = useState(initialState)
  const titleRef = useRef()

  const handleWeightChange = (e, index) => {
    const state = [...weightReps]
    state[index].weight = e.target.value
    const exerciseName = titleRef.current.textContent
    setWeightReps(state)
    setSession(prevState => ({...prevState, [exerciseName]: weightReps}) )
  }
  const handleRepsChange = (e, index) => {
    const state = [...weightReps]
    state[index].reps = e.target.value
    const exerciseName = titleRef.current.textContent
    setWeightReps(state)
    setSession(prevState => ({...prevState, [exerciseName]: weightReps}) )
  }

  return (
    <article className="perform__mid">
      <h2 ref={titleRef} className="perform__mid__title">{exercise.name}</h2>
      <article>
        <header className="perform__grid">
          <h3>Set</h3>
          <h3>Previous</h3>
          <h3>Kg</h3>
          <h3>Reps</h3>
          <p></p>
        </header>
        {amountOfSets.map((__, index) => <PerformSet key={index} index={index} weightReps={weightReps} titleRef={titleRef} handleWeightChange={handleWeightChange} handleRepsChange={handleRepsChange}   />)}
      </article>
    </article>
  );
}

export default PerformArticle;