import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../redux/name/user.actions';

function CreateExercise({ setIsModal }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [type, setType] = useState('reps')
  const nameInputRef = useRef();

  const user = useSelector(state => state.user.user)

  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    setIsModal(false);
  });

  const handleSubmit = async e => {
    e.preventDefault();

    if (name.trim() === '') {
      nameInputRef.current.focus();
      setName('');
      return;
    }
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
    setIsModal(false);
  }

  return (
    <div className="modal" onClick={() => setIsModal(false)}>
      <form onClick={e => e.stopPropagation()} onSubmit={handleSubmit}>
        <label>
          Create new exercise <br/>
          <input
            autoFocus
            ref={nameInputRef}
            type="text"
            placeholder="name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
        </label>
        <div className="perform__buttons">
          <button type="button" onClick={() => setIsModal(false)} className="btn btn--cancel">Cancel</button>
          <input type="submit" value="Add" className="btn btn--action" />
        </div>
      </form>
    </div>
  )
}

export default CreateExercise
