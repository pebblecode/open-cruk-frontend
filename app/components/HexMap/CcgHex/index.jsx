import React, { Component, PropTypes } from 'react';
import Hex from '../Hex';

require('./styles.scss');

class CcgHex extends Component {
  render() {
    const { colour } = this.props;
    return <Hex {...this.props}
      className='ccg'
      leftStyle={{'borderRightColor': colour}}
      middleStyle={{'background': colour}}
      rightStyle={{'borderLeftColor': colour}} />;
  }
}

export default CcgHex;
