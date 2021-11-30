import { Link } from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUserName } from '../redux/name/name.actions';

const Login = () => {
  const [ username, setUsername ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(setUserName(username))
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
          <Link className="login__inputs__link" to="/">
              <button onClick={handleClick} className="btn btn--action login__inputs__button">LOGIN</button>
          </Link>
        </div>
    </div>
  );
}

export default Login;
