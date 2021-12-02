import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const SelectProgram = ( {program, setModal, setIsModal} ) => {
  
  const handleClick = () => {
    setModal(program);
    setIsModal(true);
  }

  const sessions = useSelector(state => state.state.sessions);
  const previousProgram = sessions.find(session => session.program === program.title);
  const previousDate = previousProgram?.date;
  const daysSince = Math.floor((Date.now() - previousDate) / 86400000);
  const suffix = daysSince > 1 ? 'days' : 'day';
  
  return (
    <article className="program" onClick={handleClick}>
      <header className="program__header">
        <h2 className="program__header__title">{program.title}</h2>
        <Link to="/edit-program">
          <button className="btn-options program__header__edit-button"><span/></button>
        </Link>
      </header>
      <ul className="program__list">
        {program.exercises.map(exercise => <li className="program__list-item" key={exercise.name}>{exercise.name}</li>)}
      </ul>
      {previousProgram && <p className="program__days-since">{daysSince} {suffix} ago</p>}
    </article>
  );
}

export default SelectProgram;