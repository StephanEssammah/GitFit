import { useState } from 'react';
import { Link } from 'react-router-dom'
import SelectProgram from './subcomponents/SelectProgram';
import Confirm from './Confirm';

const Select = () => {

  const [modal, setModal] = useState({});
  const [isModal, setIsModal] = useState(false);

  const programs = [
    {
      id: 1,
      title: 'Legday',
      exercises: [
        {
          name: 'Squats',
          sets: 3,
        },
        {
          name: 'Leg press',
          sets: 4,
        },
        {
          name: 'Leg extensions',
          sets: 5,
        }
      ]
    },
    {
      id: 2,
      title: 'Chest',
      exercises: [
        {
          name: 'Benchpress',
          sets: 2
        },
        {
          name: 'Dumbbell press',
          sets: 24
        },
        {
          name: 'Shoulder press',
          sets: 2
        },
      ]
    },
    {
      id: 3,
      title: 'Hello',
      exercises: [
        {
          name: 'What',
          sets: 2
        },
        {
          name: 'aaa aaa aaa aaaa',
          sets: 3
        },
        {
          name: 'asdfkj eijrie hello stephan',
          sets: 4
        },
      ]
    },
  
  ]

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
      {isModal && <Confirm program={modal} setIsModal={setIsModal}/>}
    </>
  );
}

export default Select;
