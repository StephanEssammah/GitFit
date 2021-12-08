import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import SelectProgram from './subcomponents/SelectProgram';
import ConfirmModal from './ConfirmModal';
import { useSelector, useDispatch } from 'react-redux'
import { setData } from '../redux/name/user.actions';
import { fetchData } from './utils/fetchData';
import NavBar from './NavBar';

const Select = () => {
  const [modal, setModal] = useState({});
  const [isModal, setIsModal] = useState(false);

  const programs = useSelector(state => state.user.programs)
  const navigate = useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    const activeUser = document.cookie.match(/=(.+)/);
    if(!activeUser) navigate('/login')

    const fetchUserData = async () => {
      const data = await fetchData(activeUser[1]);
      dispatch(setData(data));
    }
    if (activeUser) fetchUserData()
  }, [dispatch, navigate])


  return (
    <>
      <div className="select nav-margin">
          <button onClick={() => navigate('/create-program/add-exercises')} className="select__btn-add-template">create program</button>
          {programs.map(program => {
            return <SelectProgram key={program.title} setModal={setModal} setIsModal={setIsModal} program={program} />
          })}
      </div>
      <NavBar />
      {isModal && <ConfirmModal passedFromSelect={modal} setIsModal={setIsModal}/>}
    </>
  );
}

export default Select;
