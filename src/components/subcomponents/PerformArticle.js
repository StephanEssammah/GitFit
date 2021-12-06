import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import PerformSet from './PerformSet';
import { formatTime } from '../utils/formatTime';

const PerformArticle = ({ exercise, setSession, program }) => {
  const amountOfSets = Array.from({length: exercise.sets});
  const initialState = amountOfSets.map(() => {
    return {weight: '', reps: ''}
  })
  const [ weightReps, setWeightReps ] = useState(initialState)
  const titleRef = useRef()

  const handleWeightChange = (value, index) => {
    const state = [...weightReps]
    state[index].weight = value
    const exerciseName = titleRef.current.textContent
    setWeightReps(state)
    setSession(prevState => ({...prevState, [exerciseName]: weightReps}) )
  }
  const handleRepsChange = (value, index) => {
    const state = [...weightReps]
    state[index].reps = value
    const exerciseName = titleRef.current.textContent
    setWeightReps(state)
    setSession(prevState => ({...prevState, [exerciseName]: weightReps}) )
  }

  const sessions = useSelector(state => state.user.sessions);
  const prevSession = sessions.find(session => session.program === program)
  
  return (
    <article className="perform__mid">
      <div className="perform__mid__header">
        <h2 ref={titleRef} className="perform__mid____header__title">{exercise.name}</h2>
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
        {amountOfSets.map((__, index) => (
            <PerformSet
              previous={prevSession?.exercises?.[exercise.name]?.[index]}
              rest={exercise.rest}
              key={index}
              index={index}
              weightReps={weightReps}
              titleRef={titleRef}
              handleWeightChange={handleWeightChange}
              handleRepsChange={handleRepsChange} />
          )
        )}
      </article>
    </article>
  );
}

export default PerformArticle;