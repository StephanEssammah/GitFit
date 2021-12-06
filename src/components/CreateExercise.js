import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../redux/name/user.actions';

function CreateExercise() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [type, setType] = useState('reps')

  const user = useSelector(state => state.user.user)

  const handleClick = async () => {
    const response = await fetch('http://localhost:8080/user/addExercise', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({user, name, type})
    })
      const parsedData = await response.json();
      dispatch(setData(parsedData));
      navigate('/create-program/add-exercises')
  }

  return (
    <div>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <div className="perform__buttons">
        <button onClick={() => navigate('/create-program/add-exercises')} className="btn btn--cancel">Cancel</button>
        <button onClick={handleClick} className="btn btn--action">Add</button>
    </div>
    </div>
  )
}

export default CreateExercise
