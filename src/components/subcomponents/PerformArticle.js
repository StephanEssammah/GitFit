import React, { useRef, useState } from 'react';

const PerformArticle = ({ exercise, index, state, setState, setSession }) => {
  const amount = Array.from({length: exercise.sets});
  const initialState = amount.map(item => {
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
    <article id={`${exercise.name}-${index}`} className="perform__mid">
      <h2 ref={titleRef} className="perform__mid__title">{exercise.name}</h2>
      <article>
        <header className="perform__grid">
          <h3>Set</h3>
          <h3>Previous</h3>
          <h3>Kg</h3>
          <h3>Reps</h3>
          <p></p>
        </header>
        {amount.map((set, index) => {
          return (
            <div className="perform__grid" key={index}>
              <p>{index + 1}</p>
              <p>30kg x 12</p> 
              <input onChange={e => handleWeightChange(e, index)} value={weightReps[index].weight} size="1" data-input-data className="inputOne perform__mid__input" type="number"/>
              <input onChange={e => handleRepsChange(e, index)} value={weightReps[index].reps} size="1" data-input-data className="inputTwo perform__mid__input" type="number"/>
              <input size="1" className="perform__mid__input-checkbox" type="checkbox"/>
            </div>
          )
        })}
      </article>
    </article>
  );
}

export default PerformArticle;