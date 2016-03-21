import React, { Component } from 'react';

require('./styles.scss');

class ColourKey extends Component {
  render() {
    return (
      <div className='colour-key'>
        <div className='key-part key-left' />
        <div className='key-part key-right' />
      </div>
    );
  }
}

export default ColourKey;
