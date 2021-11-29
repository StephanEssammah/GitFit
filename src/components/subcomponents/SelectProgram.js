import { Link } from 'react-router-dom'

const SelectProgram = ( {program, setModal, setIsModal} ) => {
  
  const handleClick = () => {
    setModal(program);
    setIsModal(true);
  }

  return (
    <article className="program" onClick={handleClick}>
      <header className="program__header">
        <h2 className="program__header__title">{program.title}</h2>
        <Link to="/edit-program">
          <button className="program__header__edit-button">edit</button>
        </Link>
      </header>
      <ul className="program__list">
        {program.exercises.map(exercise => <li className="program__list-item" key={exercise.name}>{exercise.name}</li>)}
      </ul>
    </article>
  );
}

export default SelectProgram;