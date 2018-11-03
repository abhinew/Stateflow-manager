import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import FlowManagement from "./components/states/FlowManagement";
import EditStateForm from './components/states/EditStateForm';
import ProductStateDetails from './components/states/ProductStateDetails';

class App extends Component {
  render() {
    return (
      <Router>

      <div className="App">
        <Route exact path="/" component={FlowManagement} />
        <Route exact path="/edit-state/:stateName/:position" component={EditStateForm} />
        <Route exact path="/" render={() => <Redirect to="/" />} />
        <Route exact path="/product-details" component={ProductStateDetails} />
      </div>
      </Router>
    );
  }
}

export default App;
