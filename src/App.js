import { Routes, Route } from 'react-router-dom'
import Login from './components/Login';
import Perform from './components/Perform';
import Select from './components/Select';
import Summary from './components/Summary'

const App = () => {
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
