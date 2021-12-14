import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoutModal from './LogoutModal';

const NavBar = () => {
  const [isModal, setIsModal] = useState(false)
  return (
    <>
      <nav className="nav-bar">
        <Link to="/history" className="nav-bar__history">History</Link>
        <Link to="/" className="nav-bar__select">Select Program</Link>
        <button onClick={() => setIsModal(!isModal && true)} className="nav-bar__logout">Logout</button>
      </nav>
      {isModal && <LogoutModal setIsModal={setIsModal} />}
    </>
  )
}

export default NavBar;
