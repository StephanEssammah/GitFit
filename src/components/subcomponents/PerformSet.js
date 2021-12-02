import React, { useState } from 'react';

const PerformSet = ({ index, weightReps, handleRepsChange, handleWeightChange, previous }) => {
  const [isChecked, setIsChecked] = useState(false)

  const previousWeight = previous?.weight;
  const previousReps = previous?.reps;

  const handleCheck = () => {
    if (isChecked)  {
      setIsChecked(false);
      return;
    }
    if (!previousWeight || !previousReps) {
      setIsChecked(true);
      return;
    }
    if (weightReps[index].weight === ''){
      handleWeightChange(previousWeight, index)
    }
    if (weightReps[index].reps === ''){
      handleRepsChange(previousReps, index)
    }
    setIsChecked(true);
  }

  let missingRepsWeights = false 
  if (previousWeight === undefined || previousReps === undefined) missingRepsWeights = true

  return (
    <div className={`perform__grid ${isChecked ? 'done' : ''}`}>
      <p>{index + 1}</p>
      {missingRepsWeights && <p>---</p>}
      {!missingRepsWeights && <p>{previousWeight}kg x {previousReps}</p>}
      <input
          placeholder={previousWeight}
          min="0"
          max="999"
          onChange={e => handleWeightChange(e.target.value, index)}
          value={weightReps[index].weight}
          size="1"
          className="inputOne perform__mid__input"
          type="number"     
      />
      <input
          placeholder={previousReps}
          min="0"
          max="999"
          onChange={e => handleRepsChange(e.target.value, index)}
          value={weightReps[index].reps}
          size="1"
          className="inputTwo perform__mid__input"
          type="number"
      />
      <input 
          size="1" 
          onChange={handleCheck} 
          className="perform__mid__input-checkbox" 
          type="checkbox"
      />
    </div>
  )
}

export default PerformSet;
