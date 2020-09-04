import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Switch>
        <Route exact path ='/'>
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
}

export default App;