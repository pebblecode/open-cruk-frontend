import React, { Component, PropTypes } from 'react';

require('./styles.scss');

class ColourKey extends Component {
  render() {
    const { redIsHigh } = this.props;
    const leftLabel = redIsHigh ? 'High' : 'Low';
    const rightLabel = redIsHigh ? 'Low' : 'High';
    return (
      <div className='colour-key'>
        <span className='left-label'>{leftLabel}</span>
        <div className='key-part key-left' />
        <div className='key-part key-right' />
        <span className='right-label'>{rightLabel}</span>
      </div>
    );
  }
}

ColourKey.propTypes = {
  redIsHigh: PropTypes.bool
};

export default ColourKey;
