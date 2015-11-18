/* @flow */

import {connect} from 'react-redux';
import React, {Component, PropTypes} from 'react';
import HexMap from '../HexMap';

import {fetchStatusesOnInterval} from '../../actions';

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchStatusesOnInterval);
  }

  render() {
    return (
      <div className={'page__home'}>
        <HexMap/>
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
  const {users, isFetching} = state;

  return {
    users,
    isFetching
  };
}

export default connect(mapStateToProps)(App);


