import React, {Component, PropTypes} from 'react';

require('./styles.scss');

class Header extends Component {
  render() {
    return (
      <header className="gbl-head">
        <a href="/" className="gbl-head-logo" >pebblecode</a>

      </header>

     );
  }
}

export default Header;


