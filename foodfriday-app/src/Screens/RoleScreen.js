import React, { Component } from 'react';
import { Router, Link } from '@reach/router';


let RoleScreen = () =>
  <div>
    What do you want to do:

    <div className="roles">
      <div className="role__option">
        <Link to="/takeorders">
          <button className="button">
            Take Orders
          </button>
        </Link>
      </div>
      <div className="role__option">
        <Link to="/placeorder">
          <button className="button">
            Place Orders
          </button>
        </Link>
      </div>
    </div>

  </div>


export default RoleScreen;
