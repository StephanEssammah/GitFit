import { useState } from 'react';
import { Link } from 'react-router-dom'
import SelectProgram from './subcomponents/SelectProgram';
import ConfirmModal from './ConfirmModal';
import { programs } from './utils/mockPrograms';

const Select = () => {
  const [modal, setModal] = useState({});
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <div className="select">
          <Link to="/add-template">
              <button className="select__btn-add-template">add template</button>
          </Link>
          {programs.map(program => {
            return <SelectProgram key={program.id} setModal={setModal} setIsModal={setIsModal} program={program} />
          })}
      </div>
      {isModal && <ConfirmModal program={modal} setIsModal={setIsModal}/>}
    </>
  );
}

export default Select;
