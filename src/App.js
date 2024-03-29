import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Pages/Home'

function App() {
  return (
    <>
    <Router>

      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home}/>
      </Routes>
    </Router>
      </>
  );
}

export default App;
