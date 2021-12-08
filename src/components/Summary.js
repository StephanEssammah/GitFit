import React from 'react'
import { useSelector } from 'react-redux'
import { displayTime } from './utils/timeConvertion'
import { addSuffixToNumber } from './utils/addSuffixToNumber'
import { useNavigate } from 'react-router'
import NavBar from './NavBar'


const Summary = () => {
  const navigate = useNavigate();
  const sessions = useSelector(state => state.user.sessions)
  const { totalTime, exercises, volume } = sessions[0]
  const exercisesKeys = Object.keys(exercises)
  
  return (
    <div className="summary nav-margin">
      <div className="summary__greeting">
        <h1>Great Job!</h1>
        <p>
          You completed your {addSuffixToNumber(sessions.length)} workout.
        </p>
      </div>
      <div className="summary__info">
        <h3 className="summary__info__heading">{sessions[0].program}</h3>
        <div className="summary__info__stats">
          <p>{`time: ${displayTime(totalTime)}`}</p>
          <p>{`volume: ${volume} kg`}</p>
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
        </div>
      </div>
      <button className="btn btn--action summary__button" onClick={() => navigate('/')}>Back to programs</button>
      <NavBar />
    </div>
  )
}

export default Summary
