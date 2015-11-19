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
    }];
    const rows = [];
    for (let i = 0; i < fields.length; i++) {
    	rows.push(<option value={fields[i].val} key={i}>{fields[i].name}</option>)
    }
    return ( 
    	<select className={'HexDropdown'} onChange={this.handleChange.bind(this)}>
    		{rows}
    	</select> 
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
