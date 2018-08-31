import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/hello';


import 'react-tabs/style/react-tabs.css';
import Tabs from './components/tabs';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Hello />
      <Tabs />
      </div>
    );
  }
}

export default App;
