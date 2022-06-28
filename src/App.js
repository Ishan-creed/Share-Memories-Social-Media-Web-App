import React from 'react';
import './App.css';
import Homepage from './components/Homepage/Homepage';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/"><Homepage/></Route>
          <Route path="/Login"> <Login/></Route>
          <Route path="/Register"><Register /></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
