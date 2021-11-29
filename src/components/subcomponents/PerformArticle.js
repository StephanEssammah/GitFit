import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom'

const PerformArticle = ({ exercise, index, state, setState }) => {
  const amount = Array.from({length: exercise.sets});

  const titleRef = useRef();
  const handleOnChange = e => {
    const exerciseName = titleRef.current.textContent;
    const groupName = `${titleRef.current.textContent}-${e.target.id}`;
    const currId = e.target.id.match(/\d+$/);
    const type = e.target.id.match(/^\w+/);

    console.log(type);
    // setState(prevState => {
    //   return {...prevState, {e.target.value} }
    // })
  }
  console.log(state);

  const userData = {
    name: [
      {
        weight: 64,
        reps: 12
      },
      {
        weight: 64,
        reps: 10
      },
      {
        weight: 64,
        reps: 7
      },
    ]
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
              <input id={`kg-${index}`} onChange={handleOnChange} value={state[`${titleRef}-kg-${index}`]} size="1" data-input-data className="inputOne perform__mid__input" type="number"/>
              <input id={`reps-${index}`} onChange={handleOnChange} value={state[`${titleRef}-reps-${index}`]} size="1" data-input-data className="inputTwo perform__mid__input" type="number"/>
              <input size="1" className="perform__mid__input-checkbox" type="checkbox"/>
            </div>
          )
        })}
      </article>
    </article>
  );
}

export default PerformArticle;