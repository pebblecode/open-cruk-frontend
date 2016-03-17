/* @flow */

import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import HexMap from '../HexMap';
import HexHover from '../HexHover';
import HexDropdown from '../HexDropdown';

import {getMap} from '../../actions';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMap);
  }

  render() {
    return (
      <div className={'page__home'}>
        <h1 className="page-title">Local cancer stats for england</h1>
        <p>Click on a region or search for it to explore its local data. View different data for the entire map by clicking the dropdown.</p>
        <HexMap/>
        <HexHover/>
        <HexDropdown/>

      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  getState: PropTypes.func.isRequired,
  points: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  ccgSelected: PropTypes.object,
  ccgCodeSelected: PropTypes.string,
  dropdown: PropTypes.string
};

function mapStateToProps(state) {
  const {points, isFetching, mapLoadFail, ccgSelected, ccgCodeSelected, dropdown} = state;

  return {
    points,
    isFetching,
    mapLoadFail,
    ccgSelected,
    ccgCodeSelected,
    dropdown
  };
}

export default connect(mapStateToProps)(App);


