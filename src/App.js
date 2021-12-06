import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Login from './components/Login';
import Perform from './components/Perform';
import Select from './components/Select';
import Summary from './components/Summary'
import AddExercises from './components/AddExercises';
import ModifyProgram from './components/ModifyProgram';
import CreateExercise from './components/CreateExercise';

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const activeUser = document.cookie.match(/=(.+)/);
    if(!activeUser) navigate('/login')
  }, [navigate])
  

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Select />} />
      <Route path="/perform" element={<Perform />} />
      <Route path="/summary" element={<Summary />} />
      <Route path="/create-program/add-exercises" element={<AddExercises />} />
      <Route path="/create-program/create-exercise" element={<CreateExercise />} />
      <Route path="/create-program/modify-program" element={<ModifyProgram />} />
    </Routes>
  );
}

export default App;
