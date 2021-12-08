import React from 'react'
import { useSelector } from 'react-redux'
import { displayTime } from './utils/timeConvertion'
import { historyExercises } from './utils/historyExercises'
import NavBar from './NavBar'


const History = () => {
  const sessions = useSelector(state => state.user.sessions)  
  
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-GB')
  }

  return (
    <div className="history nav-margin">
      <h1 className="history__main-heading">History</h1>
      {sessions.map(session => {
        return (
          <div className="history__info">
            <header className="history__info__header">
              <h3 className="history__info__header__heading">{session.program}</h3>
              <h3 className="history__info__header__heading">{formatDate(session.date)}</h3>
            </header>
            <div className="history__info__stats">
              <p>{`time: ${displayTime(session.totalTime)}`}</p>
              <p>{`volume: ${session.volume} kg`}</p>
            </div>
            <div className="history__info__exercises">
              {historyExercises(Object.keys(session.exercises), session)}
            </div>
          </div>
        )
      })}
      <NavBar />
    </div>
  )
}

export default History
