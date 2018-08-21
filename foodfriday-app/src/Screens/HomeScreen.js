import React, { Component } from 'react';
import { Router, Link } from '@reach/router';

import logo from '../ffflogo.svg';

let Home = () =><div>
    <img src={logo} className="App-logo" alt="Food Fun Friday Logo" />
    <h1 className="App-title">Food Fun Friday App</h1>
    <p className="App-subtitle">What are we having for lunch?</p>

    <Link to="dashboard">
        <button className="join-button"> Join Food Fun Friday! </button>
    </Link>


</div>;

export default Home;