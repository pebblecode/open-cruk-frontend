import {
  LOAD_MAP_FAIL,
  RECEIVE_MAP,
  REQUEST_MAP,
  REQUEST_CCG,
  RECEIVE_CCG,
  LOAD_CCG_FAIL,
  POINT_HIGHLIGHTED
}
from '../actions';

export default function usersReducer(state = {
  isFetching: false,
  points: [],
  mapLoadFail: false,
  ccgLoadFail: false,
  ccgSelected: null,
  ccgCodeSelected: '',
  pointHighlighted: null
}, action) {

  switch (action.type) {
    case REQUEST_MAP:

      return Object.assign({}, state, {
        isFetching: false,
        intervalRef: action.intervalRef
      });

    case RECEIVE_MAP:

      return Object.assign({}, state, {
        isFetching: false,
        points: action.points,
        didInvalidate: false
      });

    case LOAD_MAP_FAIL:

      return Object.assign({}, state, {
        isFetching: false,
        mapLoadFail: true
      });

    case REQUEST_CCG:

      return Object.assign({}, state, {
        isFetching: true,
        ccgCodeSelected: action.ccgCodeSelected
      });

    case RECEIVE_CCG:

      const point = state.points.filter(p => p.ccg === state.ccgCodeSelected);

      point.info = action.ccg;

      return Object.assign({}, state, {
        isFetching: false,
        ccgSelected: action.ccg
      });

    case LOAD_CCG_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        ccgLoadFail: true
      });

    case POINT_HIGHLIGHTED:
      return Object.assign({}, state, {
        pointHighlighted: action.point
      });

    default:
      return state;

  }

}
