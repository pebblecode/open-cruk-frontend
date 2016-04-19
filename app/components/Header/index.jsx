import React, {Component, PropTypes} from 'react';

require('./styles.scss');

class Header extends Component {
  render() {
    return (
      <header className="gbl-head">
        <a href="http://pebblecode.com" className="gbl-head-logo">pebblecode</a>


        <nav className="gbl-head-nav">
          <a href="/" className="gbl-head-nav-item" >Data API using CRUK data</a>
          <a href="http://pebblecode.com/blog/cruk-data-hack" className="gbl-head-nav-item btn">Tell me more</a>
        </nav>
      </header>



     );
  }
}

export default Header;


