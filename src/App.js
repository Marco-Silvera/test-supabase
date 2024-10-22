import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import { supabase } from './supabase/client';
import { PerfumeContextProvider } from './context/PerfumeContext';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session && window.location.pathname === '/dashboard') {
        navigate('/login');
      }
    };

    checkSession();
    
  }, [navigate]);

  return (
    <div className='App'>
      <PerfumeContextProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PerfumeContextProvider>
    </div>
  );
}

export default App;
