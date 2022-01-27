import './app.scss';
import React from 'react'
import Home from "./pages/home/Home"
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Watch from './pages/watch/Watch';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
const App = () => {
  const user = true;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          user ? <Home /> : <Navigate to="/register" />
        } />
        <Route path="/movies" element={
          user ? <Home type="movies" /> : <Navigate to="/register" />
        } />
        <Route path="/series" element={
          user ? <Home type="series" /> : <Navigate to="/register" />
        } />
        <Route path="/watch" element={
          user ? <Watch /> : <Navigate to="/register" />
        } />
        <Route path="/login" element={

          !user ? <Register /> : <Navigate to="/" />
        } />
        <Route path="/register" element={
          !user ? <Register /> : <Navigate to="/" />
        } />
      </Routes>
    </Router>
  );
};

export default App;