import React, { Component, PropTypes } from 'react';

require('./styles.scss');

class Hex extends Component {
  render() {
    const {
      className,
      isEven,
      colour
    } = this.props;
    const hexClass =
      isEven
      ? 'hex even ' + className
      : 'hex ' + className;
    const leftStyle = colour ? { 'borderRightColor': colour } : {};
    const middleStyle = colour ? { 'background': colour } : {};
    const rightStyle = colour ? { 'borderLeftColor': colour } : {};
    return (
      <div {...this.props} className={hexClass}>
        <div className='left' style={leftStyle} />
        <div className='middle' style={middleStyle} />
        <div className='right' style={rightStyle} />
        {this.props.children}
      </div>
    );
  }
}

Hex.propTypes = {
  isEven: PropTypes.bool,
  colour: PropTypes.string
};

export default Hex;
