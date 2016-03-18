import React, { Component } from 'react';
import Hex from '../Hex';

require('./styles.scss');

class SeaHex extends Component {
  render() {
    return <Hex {...this.props} className='sea' />;
  }
}

export default SeaHex;
