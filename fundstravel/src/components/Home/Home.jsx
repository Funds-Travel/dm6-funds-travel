import React, { Component } from 'react';

import './Home.css'

// import Packages from '../../containers/Packages/Packages';
import NavBar from '../NavBar/NavBar'


class Home extends Component {

  render() {
    return (
        <div className='homeDiv'>
          <NavBar />
          <div className='homePackageDiv'>

          </div>
        </div>
    )
  }
}

export default Home;
