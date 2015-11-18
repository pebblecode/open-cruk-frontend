import React, {Component, PropTypes} from 'react';
require('./styles.scss');

class InfoPanel extends Component {

  render() {

    let infoContents;

    if( !this.props.ccg ) {
      infoContents = (
        <p>Info Goes Here</p>
      );
    } else {
      infoContents = (
        <p>{this.props.ccg}</p>
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
  ccg: PropTypes.string
};

export default InfoPanel;
