import React, { Component } from 'react';
import TopBar from './components/layout/TopBar';
import LoginPage from './components/login/LoginPage';
import LogoutPage from './components/logout/LogoutPage';
import './App.css';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import FlowManagement from "./components/states/FlowManagement";
import EditStateForm from './components/states/EditStateForm';
import ProductStateDetails from './components/states/ProductStateDetails';
import SignupPage from './components/signup/SignupPage';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <nav>
            <TopBar />
        </nav>
        <Route exact path="/allstates" component={FlowManagement} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/logout" component={LogoutPage} />
        <Route exact path="/signup" component={SignupPage} />

        <Route exact path="/edit-state/:stateid" component={EditStateForm} />
        <Route exact path="/" render={() => <Redirect to="/allstates" />} />
        <Route exact path="/product-details" component={ProductStateDetails} />
      </div>
      </Router>
    );
  }
}

export default App;
