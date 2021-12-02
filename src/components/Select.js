import { useState } from 'react';
import { Link } from 'react-router-dom'
import SelectProgram from './subcomponents/SelectProgram';
import ConfirmModal from './ConfirmModal';
import { useSelector } from 'react-redux'

const Select = () => {
  const [modal, setModal] = useState({});
  const [isModal, setIsModal] = useState(false);

  const programs = useSelector(state => state.state.programs)

  return (
    <>
      <div className="select">
          <Link to="/add-template">
              <button className="select__btn-add-template">add template</button>
          </Link>
          {programs.map(program => {
            return <SelectProgram key={program.title} setModal={setModal} setIsModal={setIsModal} program={program} />
          })}
      </div>
      {isModal && <ConfirmModal passedFromSelect={modal} setIsModal={setIsModal}/>}
    </>
  );
}

export default Select;
