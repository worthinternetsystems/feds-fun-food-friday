import React, { Component } from 'react';
import { Router, Link } from '@reach/router';
import logo from './ffflogo.svg';
import './App.css';
import Home from './Screens/HomeScreen';
import RoleScreen from './Screens/RoleScreen'
import TakeOrdersScreen from './Screens/TakeOrdersScreen'
import PlaceOrderScreen from './Screens/PlaceOrderScreen'
import RestaurantsList from './Screens/RestaurantsList'

let Dash = () => <div>Dash</div>;
let TakeOrders = () => <div>Take orders</div>;
let PlaceOrder = () => <div>Place your order</div>;
let ChooseUserType = () => <div>Choose Your Adventure</div>

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Home path="/" />
          <RoleScreen path="/role" />
          <Dash path="dashboard" />
          <TakeOrdersScreen path="/takeorders" />
          <PlaceOrderScreen path="/placeorder" />
          <RestaurantsList path="/restaurants-list"/>
        </Router>
      </div>
    );
  }
}

export default App;
