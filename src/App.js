import React, { Component } from 'react';
import MainDashboard from './containers/MainDashboard/MainDashboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainDashboard/>
      </div>
    );
  }
}

export default App;