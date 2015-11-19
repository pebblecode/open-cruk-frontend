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
        <HexMap points={this.props.points} dispatch={this.props.dispatch}/>
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  points: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  const {points, isFetching, mapLoadFail} = state;

  return {
    points,
    isFetching,
    mapLoadFail
  };
}

export default connect(mapStateToProps)(App);


