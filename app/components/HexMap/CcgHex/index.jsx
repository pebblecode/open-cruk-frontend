import React, { Component, PropTypes } from 'react';
import Hex from '../Hex';

require('./styles.scss');

class CcgHex extends Component {
  render() {
    const hexClass = 'ccg ' + this.props.className;
    return <Hex {...this.props} className={hexClass} />;
  }
}

export default CcgHex;
