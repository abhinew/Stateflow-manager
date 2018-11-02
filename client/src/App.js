import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import FlowManagement from "./components/states/FlowManagement";
import EditStateForm from './components/states/EditStateForm';

class App extends Component {
  render() {
    return (
      <Router>

      <div className="App">
        <Route exact path="/" component={FlowManagement} />

      </div>
      </Router>
    );
  }
}

export default App;
