import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setData } from '../redux/name/name.actions';
import { allUsers } from './utils/mockPrograms';

const Login = () => {
  const [ username, setUsername ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();


 
  const handleClick = () => {
    if (username === 'Stephan') dispatch(setData(allUsers.userStephan))
    if (username === 'Carl') dispatch(setData(allUsers.userCarl))
    navigate('/')
  }

  const handleChange = e => {
    setUsername(e.target.value)
  }

  return (
    <div className="login">
        <h1 className="login__header">GitFit</h1>
        <div className="login__inputs">
          <label className="login__inputs__name" htmlFor="name">
            <input onChange={handleChange} value={username} id="name" type="text" placeholder="name" autoComplete="off" />
            <span>Name</span>
          </label>
          <button onClick={handleClick} className="btn btn--action login__inputs__button">LOGIN</button>
        </div>
    </div>
  );
}

export default Login;
