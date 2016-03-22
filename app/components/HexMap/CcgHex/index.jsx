import React, { Component, PropTypes } from 'react';
import Hex from '../Hex';

require('./styles.scss');

class CcgHex extends Component {
  render() {
    const { colour, ccgName } = this.props;
    return (
      <Hex {...this.props} className='ccg' colour={colour}>
        <span className='ccgTooltip tooltip-right'>{ccgName}</span>
      </Hex>);
  }
}

export default CcgHex;
