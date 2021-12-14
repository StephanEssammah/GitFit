import React from 'react'
import { useNavigate } from 'react-router';

const LogoutModal = ({ setIsModal }) => {
  const navigate = useNavigate()

  const handleLogout = () => {
    document.cookie = 'gitfit=';
    navigate('/login')
  }

  return (
    <div className="modal logout" onClick={() => setIsModal(false)}>
      <div onClick={e => e.stopPropagation()}>
        <h1 className="logout__title">Confirm logout?</h1>
        <div className="logout__buttons">
          <button onClick={() => setIsModal(false)} className="btn btn--cancel logout__buttons__cancel">Cancel</button>
          <button onClick={() => handleLogout()} className="btn btn--delete logout__buttons__logout">Confirm</button>
        </div>
      </div>
    </div>
  )
}

export default LogoutModal
