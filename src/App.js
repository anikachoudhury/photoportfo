import React from 'react';
import './App.css';
import Nav from './Pages/Navbar';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      
      <div className="app_left">
        <Nav />
      </div>

      <div className="app_right">
        <Home />
      </div>

    </div>
  );
}

export default App;
