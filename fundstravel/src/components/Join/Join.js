import React, { Component } from 'react';

import './Join.css'



export default class Join extends Component {

  render() {
    return (

      <div className="borderDiv">




          <div className="input">
            <div className="header"> Create Account </div>
            
              <div className="email">  Email </div>

          <input className="inputStyle" placeholder ="Enter Email" />
              <div className="password"> Password </div>
          <input className="inputStyle" placeholder ="Enter Password" />
              <div className="confirm"> Confirm </div>
          <input className="inputStyle" placeholder ="Confirm Password" />

              <button className="submitButton">Submit</button>

          </div>



      </div>
    )
  }
}
