import React from 'react';
import logo from '../ffflogo.svg';
import { Link } from '@reach/router';

const Logo = () => (
    <Link to="/"><img src={logo} className="App-logo" alt="Food Fun Friday Logo" /></Link>
)

export default Logo;