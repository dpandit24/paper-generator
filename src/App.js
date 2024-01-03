import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login, Register, Dashboard } from './pages';
import './App.css';
import { useState } from 'react';

function App() {
  const [username, setUserName] = useState('')

  const handleLogin = (user) => {
    setUserName(user)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login onLogin={handleLogin} />}/>
        <Route path='/dashboard' element={
          <ProtectedRoute username={username}>
            <Dashboard />
          </ProtectedRoute>
        }/>
      </Routes>
    </BrowserRouter>
    // <Register />
  );
}

export default App;

export const ProtectedRoute = ({username, children}) => {
  if(username){
    return children
  }else {
    alert("Protected Route")
    return <Navigate to='/'/>
  }
}
