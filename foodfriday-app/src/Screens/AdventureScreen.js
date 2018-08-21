import React from 'react';
import { Link } from '@reach/router';
import Logo from '../Components/Logo';

let AdventureScreen = () => (
  <div className="AdventureScreen">
    <Logo />
    <Link className="ui-button" to="/restaurants">Orderer</Link>
    <Link className="ui-button" to="/leader">Leader</Link>
  </div>
);

export default AdventureScreen;
