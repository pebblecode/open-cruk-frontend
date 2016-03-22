/* @flow */

import {connect} from 'react-redux';

import React, {Component, PropTypes} from 'react';
import Header from '../Header';
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
        <Header/>
        <div className="grid-container">
          <div className="grid">
            <h1 className="page-title">Local cancer stats for england</h1>
            <p className="intro-text">Click on a region or search for it to explore its local data. View different data for the entire map by clicking the dropdown.</p>
          </div>

          <div>
            <HexDropdown/>
            <HexMap/>
            <HexHover/>
          </div>
        </div>
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


