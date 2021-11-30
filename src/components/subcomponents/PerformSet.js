import React, { useState } from 'react';

const PerformSet = ({ index, state, handleOnChange, titleRef }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className={`perform__grid ${isChecked ? 'done' : ''}`}>
      <p>{index + 1}</p>
      <p>30kg x 12</p> 
      <input min="0" max="999" id={`kg-${index}`} onChange={handleOnChange} value={state[`${titleRef}-kg-${index}`]} size="1" data-input-data className="inputOne perform__mid__input" type="number"/>
      <input min="0" max="999" id={`reps-${index}`} onChange={handleOnChange} value={state[`${titleRef}-reps-${index}`]} size="1" data-input-data className="inputTwo perform__mid__input" type="number"/>
      <input size="1" onChange={() => setIsChecked(isChecked === false)} className="perform__mid__input-checkbox" type="checkbox"/>
    </div>
  )
}

export default PerformSet;
