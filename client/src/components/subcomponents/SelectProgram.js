import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { displayTime } from '../utils/timeConvertion';

const SelectProgram = ({ program, setModal, setIsModal }) => {
  const navigate = useNavigate();
  
  const sessions = useSelector(state => state.user.sessions);
  const previousProgram = sessions.find(session => session.program === program.title);
  const previousDate = previousProgram?.date;
  const daysSince = Math.floor((Date.now() - previousDate) / 86400000);
  const suffix = daysSince > 1 ? 'days' : 'day';
  const daysString = `${daysSince} ${suffix} ago`

  const matchingSessions = sessions.filter(session => session.program === program.title);
  const sessionTimes = matchingSessions?.map(session => session.totalTime)
  const totalTime = sessionTimes?.reduce((prev, curr) => prev + curr , 0);
  const averageTime = totalTime / sessionTimes.length;

  const handleClick = () => {
    setModal({ program, previousProgram, averageTime, daysSince: daysString });
    setIsModal(true);
  }
  
  const handleEdit = e => {
    e.stopPropagation()
    navigate('/edit-program', {state: {program}})
  }
  
  return (
    <article className="program" onClick={handleClick}>
      <header className="program__header">
        <h2 className="program__header__title">{program.title}</h2>
        <button onClick={handleEdit} className="btn-options program__header__edit-button">Edit</button>
      </header>
      <ul className="program__list">
        {program.exercises && program.exercises.map(exercise => <li className="program__list-item" key={exercise.name}>{exercise.name}</li>)}
      </ul>
      <div className="program__stats">
        {previousProgram && <p className="program__stats__days-since">{daysString}</p>}
        {averageTime > 0 && <p className="program__stats__average-time">~ {displayTime(averageTime)}</p>}
      </div>
    </article>
  );
}

export default SelectProgram;