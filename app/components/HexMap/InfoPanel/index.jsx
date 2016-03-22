import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {resetInfoPanel} from '../../../actions';

require('./styles.scss');


function addCommasTo(number) {
  return number.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

class InfoPanel extends Component {

  handleReset() {
    const {dispatch} = this.props;
    dispatch(resetInfoPanel());
  }

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


      function insertStars(comparison_text){
        const star_level = {
          'better than': 3,
          'similar to': 2,
          'worse than': 1,
        }
        const level = star_level[comparison_text]
        const arr = []
        for (let i = 0; i < level; i++){
          arr.push(<span className="star">★</span>)
        }
        return arr
      }

      infoContents = (
        <div className="grid">
          <h2>{this.props.ccgSelected.name}</h2>
          <div className={'topFiguresPanel'}>
            <div className={'topFigureBox'}>
              <div className={'topFigure'}>{addCommasTo(this.props.ccgSelected.incidences)}</div>
              <span className={'topFigureLabel'}>cancer cases per year</span>
            </div>
            <div className={'topFigureBox'}>
              <div className={'topFigure'}>{addCommasTo(this.props.ccgSelected.deaths)}</div>
              <span className={'topFigureLabel'}>cancer deaths per year</span>
            </div>
            <div className={'topFigureBox'}>
              <div className={'topFigure'}>{addCommasTo(this.props.ccgSelected.patients.total_all)}</div>
              <span className={'topFigureLabel'}>total patients</span>
            </div>
          </div>
          <div className={ccg.oneYearSurvivalRate.comp.replace(" ", "")}>
            <h3>One-year survival rate {insertStars(ccg.oneYearSurvivalRate.comp)}</h3>
            <p>One-year cancer survival in {ccg.oneYearSurvivalRate.name},
            ({ccg.oneYearSurvivalRate.rate}%) is {ccg.oneYearSurvivalRate.comp} the English average ({ccg.oneYearSurvivalRate.avg}%).
            </p>
          </div>
          <div className={ccg.specialist.comp.replace(" ", "")}>
            <h3>Speed of referral {insertStars(ccg.specialist.comp)}</h3>
            <p>The proportion of patients in {ccg.specialist.name} that are urgently referred with suspected cancer and see a specialist within two weeks ({ccg.specialist.rate}%)
             is {ccg.specialist.comp} the English average ({ccg.specialist.avg}%).
            </p>
          </div>
          <div className={ccg.firstTreatment.comp.replace(" ", "")}>
            <h3>Speed of treatment {insertStars(ccg.firstTreatment.comp)}</h3>
            <p>The proportion of patients in {ccg.firstTreatment.name} that receive their first treatment for cancer within 62 days of an urgent GP referral ({ccg.firstTreatment.rate}%)
            is {ccg.firstTreatment.comp} the English average ({ccg.firstTreatment.avg}%).
            </p>
          </div>
          <div className='cruk-logo'></div>
          <div className='data-source' onClick={this.handleReset.bind(this)}>Click to view our data sources</div>
        </div>
      );
    } else {
      infoContents = (
        <div>

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
