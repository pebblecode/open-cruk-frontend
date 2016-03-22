import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

import {changeDropdown} from '../../actions';

require('./styles.scss');

class HexDropdown extends Component {

	handleChange(item) {
    const {dispatch} = this.props;

    if (item) {
      dispatch(changeDropdown(item.target.value));
    }

  }

  render() {
    const fields = [{
      name: 'Mortality Rate',
      val: 'mortalityRate'
    }, {
      name: 'No. of Deaths',
      val: 'deaths'
    }, {
      name: 'No. of Cancer Cases',
      val: 'incidences'
    }, {
      name: '1 Year Survival Rate',
      val: 'oneYearSurvivalRate'
    }, {
      name: 'Specialist Referral Speed',
      val: 'specialist'
    }, {
      name: 'Treatment Speed',
      val: 'firstTreatment'
    }, {
      name: 'Total No. of Patients',
      val: 'population'
    }];
    const rows = [];
    for (let i = 0; i < fields.length; i++) {
    	rows.push(<option value={fields[i].val} key={i}>{fields[i].name}</option>)
    }
    return (
    	<div className="dropdown-style">
        <select className={'HexDropdown'} onChange={this.handleChange.bind(this)}>
    		  {rows}
    	 </select>
      </div>

    );
  }

}


function mapStateToProps(state) {
  const {dropdown} = state;

  return {
    dropdown
  };
}

HexDropdown.propTypes = {
  dropdown: PropTypes.string
};

export default connect(mapStateToProps)(HexDropdown);


