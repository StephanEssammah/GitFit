import { Routes, Route } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router';
import { useEffect } from 'react';
import Login from './components/Login';
import Perform from './components/Perform';
import Select from './components/Select';
import Summary from './components/Summary'
import AddExercises from './components/AddExercises';
import ModifyProgram from './components/ModifyProgram';
import Signup from './components/Signup'
import History from './components/History'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect(() => {
    const activeUser = document.cookie.match(/=(.+)/);
    if(!activeUser && location.pathname !== '/signup') navigate('/login')
  }, [navigate, location.pathname])
  

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Select />} />
      <Route path="/perform" element={<Perform />} />
      <Route path="/summary" element={<Summary />} />

      <Route path="/create-program/add-exercises" element={<AddExercises />} />
      <Route path="/create-program/modify-program" element={<ModifyProgram />} />
      <Route path="/edit-program" element={<ModifyProgram />} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/history" element={<History />} />
    </Routes>
  );
}

export default App;
