import React, {Component, PropTypes} from 'react';
require('./styles.scss');

class InfoPanel extends Component {

  render() {

    let infoContents;

    if (this.props.ccgSelected) {
      infoContents = (
        <div>
          <h2>{this.props.ccgSelected.name}</h2>
          <p>One-year cancer survival in {this.props.ccgSelected.name}, 
          ({this.props.ccgSelected.oneYearSurvivalRate}%) is {this.props.ccgSelected.averages.oneYearSurvivalRate} the English average ({this.props.ccgSelected.englishAverages.specialist}%).</p>
          <p>The proportion of patients in {this.props.ccgSelected.name} that are urgently referred with suspected cancer and see a specialist within two weeks ({this.props.ccgSelected.specialist}%) 
           is {this.props.ccgSelected.averages.specialist} the English average ({this.props.ccgSelected.englishAverages.specialist}%).</p>
          <p>The proportion of patients in {this.props.ccgSelected.name} that receive their first treatment for cancer within 62 days of an urgent GP referral 
          is {this.props.ccgSelected.averages.firstTreatment} the English average ({this.props.ccgSelected.englishAverages.firstTreatment}%).</p>
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

export default InfoPanel;
