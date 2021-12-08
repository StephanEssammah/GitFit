import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleRestTimer } from '../../redux/name/user.actions';

const PerformSet = ({ index, weightReps, handleRepsChange, handleWeightChange, previous, rest}) => {
  const [isChecked, setIsChecked] = useState(false)
  const dispatch = useDispatch();
  const previousWeight = previous?.weight;
  const previousReps = previous?.reps;

  const handleCheck = () => {
    if (isChecked) return setIsChecked(false);

    if (previousWeight && weightReps[index].weight === ''){
      handleWeightChange(previousWeight, index)
    }
    if (previousReps && weightReps[index].reps === ''){
      handleRepsChange(previousReps, index)
    }
    setIsChecked(true);
    if (rest) dispatch(toggleRestTimer(['on', rest]));
  }


  let missingRepsWeights = false 
  if (previousWeight === '' || previousReps === '') missingRepsWeights = true
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
