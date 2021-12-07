import { useNavigate } from 'react-router'
import { displayTime } from './utils/timeConvertion'

const ConfirmModal = ({ passedFromSelect, setIsModal }) => {

  const { program, averageTime, daysSince } = passedFromSelect
  const navigate = useNavigate();
  
  const handleStartClick = e => {
    e.stopPropagation();
    navigate('/perform', {state: program})
  }

  const handleCancelClick = e => {
    e.stopPropagation();
    setIsModal(false);
  }

  const handleEdit = e => {
    e.stopPropagation();
    // navigate('/modify-program');
  }

  return (
    <div className="modal" onClick={() => setIsModal(false)}>
      <article className="program" onClick={e => e.stopPropagation()}>
        <header className="program__header">
          <h2 className="program__header__title">{program.title}</h2>
          <button onClick={handleEdit} className="btn-options program__header__edit-button">Edit</button>
        </header>
        <ul className="program__list">
          {program.exercises.map(exercise => <li className="program__list-item" key={exercise.name}>{`${exercise.sets} x ${exercise.name}`}</li>)}
        </ul>
        <div className="program__stats">
          {daysSince && <p className="program__stats__days-since">{daysSince}</p>}
          {averageTime > 0 && <p className="program__stats__average-time">~ {displayTime(averageTime)}</p>}
        </div>
        <footer className="confirm__footer">
          <button className="btn btn--cancel confirm__footer__btn--cancel" onClick={handleCancelClick}>Cancel</button>
          <button className="btn btn--action confirm__footer__btn--confirm" onClick={handleStartClick}>Start workout</button>
        </footer>
      </article>
    </div>
  );
}

export default ConfirmModal;