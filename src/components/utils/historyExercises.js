import React from 'react'

export const historyExercises = (exercises, session) => {
  return (
    <div className="history__info__col">
      {exercises.map(exercise => (
          <>
            <h4 className="history__info__col__exercise">{exercise}</h4>
            <ul className="history__info__col__sets">
            {session.exercises[exercise].map((set, index) => {
              if (set.reps === '') return null;
              return <li>{`${set.weight}kg x ${set.reps}`}</li>
            })}
            </ul>
          </>
        )
      )}
    </div>
  )
}
