import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const menu = ["About","Portfolio","Resume","Contact"];
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Under Construction</h2>
        </div>
        <p className="App-intro">
          <code>Danielle DeManss - portfolio</code>
        </p>
        <div className="App-menu-section">
          <div className="App-menu-items">
            <ul>
              {
                menu.map(m =>
                  <li>{m}</li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
