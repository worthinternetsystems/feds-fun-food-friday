import React, {Component} from 'react';
import {Router} from '@reach/router';
import './App.css';
import Home from './Screens/HomeScreen';

let Dash = () => <div>Dash</div>;
let ChooseUserType = () => <div>Choose Your Adventure</div>

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Home path="/"/>
                    <ChooseUserType path="/chooseuserrole"/>
                    <Dash path="dashboard"/>
                </Router>
            </div>
        );
    }
}

export default App;
