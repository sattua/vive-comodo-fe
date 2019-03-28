import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainMenu from './container/dashboard/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MainMenu mainTitle={"Yess"} />
      </div>
    );
  }
}

export default App;
