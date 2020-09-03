import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Donation from './components/Donation.component';

// import components
function App() {
  return (
      <div className="container">
        <Donation />
      </div>
    
  );
}

export default App;
