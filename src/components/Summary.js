import React from 'react'
import { useSelector } from 'react-redux'
import { displayTime } from './utils/timeConvertion'
import { addSuffixToNumber } from './utils/addSuffixToNumber'


const Summary = () => {

  const sessions = useSelector(state => state.state.sessions)
  const { totalTime, exercises, volume } = sessions[0]
  const exercisesKeys = Object.keys(exercises)
  
  return (
    <div className="summary">
      <div className="summary__greeting">
        <h1>Great Job!</h1>
        <p>
          You completed your {addSuffixToNumber(sessions.length)} workout.
          <br/>
          You set ... new records!
        </p>
      </div>
      <div className="summary__info">
        <h3 className="summary__info__heading">Legday</h3>
        <div className="summary__info__stats">
          <p>{displayTime(totalTime)}</p>
          <p>{`${volume} kg`}</p>
          <p>1 PR</p>
        </div>
        <div className="summary__info__exercises">
          <div className="summary__info__col">
          {exercisesKeys.map(k => {
              return (
                <React.Fragment key={k}>
                  <h4>{k}</h4>
                  {exercises[k].map((set, index)=> {
                    if (set.reps === '') return null;
                    return <p key={index}>{`${set.weight}kg x ${set.reps}`}</p>
                  })}
                </React.Fragment>
              )
            })}
          </div>
          <div className="summary__info__col">
            <p>Best set</p>
            <p>70kg x 2</p>
            <p>65kg x 12</p>
            <p>14kg x 8</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary
