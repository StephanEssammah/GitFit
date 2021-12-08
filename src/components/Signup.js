import { useState, useRef } from 'react'
import { useNavigate } from 'react-router';

const Signup = () => {
  const [userExists, setUserExists] = useState(false)
  const [passwordMismatch, setPasswordMismatch] = useState(false)
  const navigate = useNavigate();
  const repPassword = useRef();
  const userInput = useRef();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setPasswordMismatch(false);
    const formData = new FormData(e.target);
    const user = formData.get('name') 
    const password = formData.get('password') 
    const repeatPassword = formData.get('repeat-password') 

    if (password !== repeatPassword){
      setPasswordMismatch(true)
      repPassword.current.focus();
      return;
    }

    const response = await fetch('http://localhost:8080/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        user,
        password
      })
    })
    
    setUserExists(!response.ok)
    if (!response.ok) userInput.current.focus();
  
    // const data = await response.json()
    // dispatch(setData(data));
    navigate('/')
  }

  return (
    <div className="login">
      <h1 className="login__header">GitFit</h1>
        <form className="login__form" onSubmit={handleSubmit} >
          <label className="login__form__input" htmlFor="username">
            <input
              autoFocus
              ref={userInput}
              required
              id="name"
              name="name"
              type="text"
              placeholder="username"
              autoComplete="off" />
            <span>Name</span>
          {userExists && <p style={{color:'red'}} >User already exists!</p>}

          </label>
          <label className="login__form__input" htmlFor="password">
            <input
              required
              id="password"
              type="password"
              name="password"
              placeholder="password"
              autoComplete="off" />
            <span>Password</span>
          </label>
          <label className="login__form__input" htmlFor="repeat-password">
            <input
              required
              ref={repPassword}
              id="repeat-password"
              type="password"
              name="repeat-password"
              placeholder="repeat-password"
              autoComplete="off" />
            <span>Repeat Password</span>
          </label>
          {passwordMismatch && <p style={{color:'red'}} >Passwords not matching!</p>}
          <button className="btn btn--action login__form__button">SIGN UP</button>
          <button onClick={() => navigate('/login')}className="btn btn--cancel login__form__button">Cancel</button>
          
        </form>
    </div>
  )
}

export default Signup
