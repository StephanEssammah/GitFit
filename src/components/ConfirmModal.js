import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router'

const ConfirmModal = ({ program, setIsModal }) => {
  const navigate = useNavigate();
  
  const handleStartClick = e => {
    e.stopPropagation();
    navigate('/perform', {state: program})
  }

  const handleCancelClick = e => {
    e.stopPropagation();
    setIsModal(false);
  }

  return (
    <div className="modal" onClick={() => setIsModal(false)}>
      <article className="program" onClick={e => e.stopPropagation()}>
        <header className="program__header">
          <h2 className="program__header__title">{program.title}</h2>
          <Link to="/edit-program">
            <button className="btn-options program__header__edit-button"><span/></button>
          </Link>
        </header>
        <ul className="program__list">
          {program.exercises.map(exercise => <li className="program__list-item" key={exercise.name}>{`${exercise.sets} x ${exercise.name}`}</li>)}
        </ul>
        <footer className="confirm__footer">
          <button className="btn btn--cancel confirm__footer__btn--cancel" onClick={handleCancelClick}>Cancel</button>
          <button className="btn btn--action confirm__footer__btn--confirm" onClick={handleStartClick}>Start workout</button>
        </footer>
      </article>
    </div>
  );
}

export default ConfirmModal;