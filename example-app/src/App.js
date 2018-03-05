import React, { Component } from 'react';
import { containers } from './containers';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <containers.Navigation />
      </div>
    );
  }
}

export default App;
