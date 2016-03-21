import React, {Component, PropTypes} from 'react';

require('./styles.scss');

class Header extends Component {
  render() {
    return (
      <header className="gbl-head">
        <a href="/" className="gbl-head-logo">pebblecode</a>


        <nav className="gbl-head-nav">
          <a href="/" className="gbl-head-nav-item" >Data API using CRUK data</a>
          <a href="/" className="gbl-head-nav-item btn">Tell Me More</a>
        </nav>
      </header>



     );
  }
}

export default Header;


