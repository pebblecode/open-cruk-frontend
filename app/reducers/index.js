import {LOAD_MAP_FAIL, RECEIVE_MAP, REQUEST_MAP} from '../actions';

export default function usersReducer(state = {
  isFetching: false,
  didInvalidate: false,
  points: [],
  intervalRef: null,
  mapLoadFail: false
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
        didInvalidate: false,
        mapLoadFail: true
      });

    default:
      return state;

  }

}
