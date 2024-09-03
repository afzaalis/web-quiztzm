import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { LoginForm } from './pages/login';
import { SignUpForm } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import { QuizForm } from './pages/Kuis';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />

        <Route path="/login" element={<LoginForm />} />

        <Route path="/signup" element={<SignUpForm />} />

        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/kuis" element={<QuizForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
