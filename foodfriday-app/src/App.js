import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import logo from './ffflogo.svg';
import './App.css';
import Home from './Screens/HomeScreen';
import RestaurantsList from './Screens/RestaurantsList'

let Dash = () => <div>Dash</div>;
let ChooseUserType = () => <div>Choose Your Adventure</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <ChooseUserType path="/chooseuserrole" />
          <Dash path="dashboard" />
          <RestaurantsList path="/restaurants-list"/>
        </Router>
      </div>
    );
  }
}

export default App;
