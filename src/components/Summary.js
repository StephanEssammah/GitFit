import React from 'react'
import { useSelector } from 'react-redux'
import { displayTime } from './utils/timeConvertion'


const Summary = () => {
  const totalTime = useSelector(state => state.state.totalTime)

  

  return (
    <div className="summary">
      <div className="summary__greeting">
        <h1>Great Job!</h1>
        <p>
          You completed your ... workout.
          <br/>
          You set ... new records!
        </p>
      </div>
      <div className="summary__info">
        <h3 className="summary__info__heading">Legday</h3>
        <div className="summary__info__stats">
          <p>{displayTime(totalTime)}</p>
          <p>4625kg</p>
          <p>1 PR</p>
        </div>
        <div className="summary__info__exercises">
          <div className="summary__info__col">
            <p>Exercise</p>
            <p>3 x Squat</p>
            <p>3 x Leg press</p>
            <p>3 x Leg extensions</p>
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
