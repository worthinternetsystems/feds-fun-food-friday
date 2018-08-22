import React, {Component} from 'react';

export class Restaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurantList: [],
            inputValue: ''
        }
    }

    createRestaurant = () => {
        this.setState({
            restaurantList: [...this.state.restaurantList, {title: 'hello'}]
        }, () => {
            console.log(this.state.restaurantList)
            console.log(this.state.inputValue)
        });
    };

    changeValue = (event) => {
        this.setState({
            inputValue: event.target.value
        });
    };

    render() {
        return (
            <div>
                <h1>Restaurant</h1>
                <ul>
                    <li></li>
                </ul>
                <label htmlFor="name">Restaurant name</label>
                <input id="name" type="text" name="name" value={this.state.inputValue} onChange={this.changeValue}/>
                <button type='button' onClick={this.createRestaurant}>Create a restaurant</button>
            </div>
        );
    }
}