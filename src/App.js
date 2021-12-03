import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import Login from './components/Login';
import Perform from './components/Perform';
import Select from './components/Select';
import Summary from './components/Summary'

const App = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const activeUser = document.cookie.match(/=(.+)/);
    if(!activeUser) navigate('/login')
    return () => {
      console.log('cleanup app');
    }
  }, [navigate])
  

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Select />} />
      <Route path="/perform" element={<Perform />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  );
}

export default App;
