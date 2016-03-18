import React, { Component, PropTypes } from 'react';

require('./styles.scss');

class Hex extends Component {
  render() {
    const { className, isEven } = this.props;
    const hexClass =
      isEven
      ? 'hex even ' + className
      : 'hex ' + className;
    return (
      <div {...this.props} className={hexClass}>
        <div className='left' />
        <div className='middle' />
        <div className='right' />
      </div>
    );
  }
}

Hex.propTypes = {
  isEven: PropTypes.bool
};

export default Hex;
