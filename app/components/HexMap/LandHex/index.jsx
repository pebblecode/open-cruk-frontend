import React, { Component } from 'react';
import Hex from '../Hex';

require('./styles.scss');

class LandHex extends Component {
  render() {
    return <Hex {...this.props} className='land' />;
  }
}

export default LandHex;
