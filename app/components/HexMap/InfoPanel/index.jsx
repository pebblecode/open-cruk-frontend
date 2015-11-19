import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

require('./styles.scss');

class InfoPanel extends Component {

  render() {

    let infoContents;

    if (this.props.ccgSelected) {
      infoContents = (
        <div>
        <p>{this.props.ccgCodeSelected}</p>
        <p> put more info here. about ccg </p>
        </div>
      );
    }

    return (
      <div className="InfoPanel">
        {infoContents}
      </div>
    );
  }

}

InfoPanel.propTypes = {
  ccgCodeSelected: PropTypes.string,
  ccgSelected: PropTypes.object
};

function mapStateToProps(state) {
  const {ccgSelected, ccgCodeSelected} = state;

  return {
    ccgSelected,
    ccgCodeSelected
  };
}

export default connect(mapStateToProps)(InfoPanel);
