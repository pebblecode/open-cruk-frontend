import React, { Component, PropTypes } from 'react';

require('./styles.scss');

class Hex extends Component {
  render() {
    const {
      className,
      isEven,
      leftStyle,
      middleStyle,
      rightStyle
    } = this.props;
    const hexClass =
      isEven
      ? 'hex even ' + className
      : 'hex ' + className;
    return (
      <div {...this.props} className={hexClass}>
        <div className='left' style={leftStyle} />
        <div className='middle' style={middleStyle} />
        <div className='right' style={rightStyle} />
      </div>
    );
  }
}

Hex.propTypes = {
  isEven: PropTypes.bool
};

export default Hex;
