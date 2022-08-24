import React from 'react';
import './App.css';
import Users from './Users/Users';/*Импортируем Users*/


function App() {
  return (
    <div className="App container">
      <header className="App-header">
      </header>
      <h1 className = 'container'>My React App</h1>
      <Users/>
    </div>
  );
}

export default App;
