import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

require('./styles.scss');

function addCommasTo(number) {
  return number.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

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
        };
      });

      infoContents = (
        <div>
          <h2>Is cancer diagnosed early enough in {this.props.ccgSelected.name}?</h2>
          <div className={'topFiguresPanel'}>
            <div className={'topFigureBox'}>
              <div className={'topFigure'}>{addCommasTo(this.props.ccgSelected.incidences)}</div>
              <span className={'topFigureLabel'}>cancer cases per year</span>
            </div>
            <div className={'topFigureBox'}>
              <div className={'topFigure'}>{addCommasTo(this.props.ccgSelected.deaths)}</div>
              <span className={'topFigureLabel'}>cancer deaths per year</span>
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
    } else {
      infoContents = (
        <div>
          <h2>Cancer Research UK Open Data Map</h2>
          <h3>Local Cancer Statistics</h3>
          <p>Use Local Cancer Statistics to find and compare statistical information and intelligence about cancer in areas across the UK.</p>
          <h3>What data is available?</h3>
          <p>This tool includes data on cancer incidence, survival and mortality, refferal and treatment.</p>
          <h3>Where is the data from?</h3>
          <p>The data comes from a number of publicly available sources in England, Northern Ireland, Scotland and Wales.</p>
        </div>
      )
    }

    return (
      <div className={'InfoPanel'}>
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
