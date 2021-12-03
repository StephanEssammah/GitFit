import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom'
import SelectProgram from './subcomponents/SelectProgram';
import ConfirmModal from './ConfirmModal';
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../redux/name/name.actions';


const Select = () => {
  const [modal, setModal] = useState({});
  const [isModal, setIsModal] = useState(false);

  const programs = useSelector(state => state.state.programs)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    const activeUser = document.cookie.match(/=(.+)/);
    if(!activeUser) navigate('/login')

    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/user/getData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          user: activeUser[1]
        })
      })
        const parsed = await response.json();
        dispatch(setData(parsed));
    }
    if (activeUser) {
      fetchData();
    }
  }, [dispatch, navigate])


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
