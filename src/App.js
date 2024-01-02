import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Dashboard } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>
    </BrowserRouter>
    // <Register />
  );
}

export default App;
