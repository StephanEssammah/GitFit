import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setData } from '../redux/name/user.actions';
import { Link } from 'react-router-dom'

const API = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:8080/'

const Login = () => {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch(`${API}user/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user: username,
        password
      })
    })

    const data = await response.json()
    dispatch(setData(data));
    navigate('/')
  }

  return (
    <div className="login">
        <h1 className="login__header">GitFit</h1>
        <form className="login__form" onSubmit={handleSubmit} >
          <label className="login__form__input" htmlFor="username">
            <input
              required
              onChange={e => setUsername(e.target.value)}
              value={username}
              id="name"
              type="text"
              placeholder="username"
              autoComplete="off" />
            <span>Username</span>
          </label>
          <label className="login__form__input" htmlFor="password">
            <input
              required
              onChange={e => setPassword(e.target.value)}
              value={password}
              id="password"
              type="password"
              placeholder="password"
              autoComplete="off" />
            <span>Password</span>
          </label>
          <button className="btn btn--action login__form__button">LOGIN</button>
        </form>
        <Link to='/signup' className="login__create-account">Create Account</Link>
    </div>
  );
}

export default Login;
