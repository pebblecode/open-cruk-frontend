/* @flow */

import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import HexMap from '../HexMap';

import {getMap} from '../../actions';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(getMap);
  }

  render() {
    return (
      <div className={'page__home'}>

        <HexMap
          ccgSelected={this.props.ccgSelected}
          ccgCodeSelected={this.props.ccgCodeSelected}
          points={this.props.points}
          dispatch={this.props.dispatch}
          getState={this.props.getState}/>
        //Info panel should be here.
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
  ccgCodeSelected: PropTypes.string
};

function mapStateToProps(state) {
  const {points, isFetching, mapLoadFail, ccgSelected, ccgCodeSelected} = state;

  return {
    points,
    isFetching,
    mapLoadFail,
    ccgSelected,
    ccgCodeSelected
  };
}

export default connect(mapStateToProps)(App);


