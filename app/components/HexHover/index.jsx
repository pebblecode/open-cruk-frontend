import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

require('./styles.scss');

class HexHover extends Component {

  render() {
    const name = this.props.pointHighlighted ? this.props.pointHighlighted.name : '';

    return ( <div className={'HexHover'}> {name}</div> );
  }

}

function mapStateToProps(state) {
  const {pointHighlighted} = state;

  return {
    pointHighlighted
  };
}

HexHover.propTypes = {
  pointHighlighted: PropTypes.object
};

export default connect(mapStateToProps)(HexHover);
