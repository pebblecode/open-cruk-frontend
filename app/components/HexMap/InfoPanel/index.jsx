import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

require('./styles.scss');

class InfoPanel extends Component {

  render() {

    let infoContents;

    if (this.props.ccgSelected) {
      const ccg = {};
      const fields = ['oneYearSurvivalRate', 'specialist', 'firstTreatment'];
      fields.map((i) => {
        ccg[i] = {
          'name': this.props.ccgSelected.name,
          'rate': this.props.ccgSelected[i].toFixed(1),
          'comp': this.props.ccgSelected.averages[i],
          'avg': this.props.ccgSelected.englishAverages[i].toFixed(1)
        }
      })
      infoContents = (
        <div>
          <h2>{this.props.ccgSelected.name}</h2>
          <div className='topFiguresPanel'>
            <div className='topFigureBox'>
              <div className='topFigure'>{this.props.ccgSelected.incidences}</div>
              <span className='topFigureLabel'>cancer cases per year</span>
            </div>
            <div className='topFigureBox'>
              <div className='topFigure'>{this.props.ccgSelected.deaths}</div>
              <span className='topFigureLabel'>cancer deaths per year</span>
            </div>
          </div>
          <h3>One-year survival rate</h3>
          <p>One-year cancer survival in {ccg.oneYearSurvivalRate.name}, 
          ({ccg.oneYearSurvivalRate.rate}%) is {ccg.oneYearSurvivalRate.comp} the English average ({ccg.oneYearSurvivalRate.avg}%).
          </p>
          <h3>Speed of referral</h3>
          <p>The proportion of patients in {ccg.specialist.name} that are urgently referred with suspected cancer and see a specialist within two weeks ({ccg.specialist.rate}%) 
           is {ccg.specialist.comp} the English average ({ccg.specialist.avg}%).
          </p>
          <h3>Speed of treatment</h3>
          <p>The proportion of patients in {ccg.firstTreatment.name} that receive their first treatment for cancer within 62 days of an urgent GP referral ({ccg.firstTreatment.rate}%) 
          is {ccg.firstTreatment.comp} the English average ({ccg.firstTreatment.avg}%).
          </p>
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
