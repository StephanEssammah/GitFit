import React, { useState } from 'react';

const PerformSet = ({ index, weightReps, handleRepsChange, handleWeightChange, titleRef }) => {
  const [isChecked, setIsChecked] = useState(false)
  return (
    <div className={`perform__grid ${isChecked ? 'done' : ''}`}>
      <p>{index + 1}</p>
      <p>30kg x 12</p> 
      <input min="0" max="999" onChange={e => handleWeightChange(e, index)} value={weightReps[index].weight} size="1" data-input-data className="inputOne perform__mid__input" type="number"/>
      <input min="0" max="999" onChange={e => handleRepsChange(e, index)} value={weightReps[index].reps} size="1" data-input-data className="inputTwo perform__mid__input" type="number"/>
      <input size="1" onChange={() => setIsChecked(isChecked === false)} className="perform__mid__input-checkbox" type="checkbox"/>
    </div>
  )
}

export default PerformSet;
