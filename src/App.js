import React from 'react';
import NavBar from './components/NavBar'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
    <NavBar />
    </Router>
  );
}

export default App;
