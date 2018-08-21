import React from 'react';
import { Link } from '@reach/router';
import Logo from '../Components/Logo';

let Home = () =><div>
    <Logo/>
    <h1 className="App-title">Food Fun Friday App</h1>
    <p className="App-subtitle">What are we having for lunch?</p>
    <Link to="adventure" className="join-button">
        Join Food Fun Friday!
    </Link>


</div>;

export default Home;