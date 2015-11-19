import {
  LOAD_MAP_FAIL,
  RECEIVE_MAP,
  REQUEST_MAP,
  REQUEST_CCG,
  RECEIVE_CCG,
  LOAD_CCG_FAIL,
  POINT_HIGHLIGHTED,
  CHANGE_DROPDOWN
}
from '../actions';

const SIMILARITY_THRESHOLD = 1;
const ENGLISH_AVERAGES = {
  'oneYearSurvivalRate': 68.2,
  'specialist': 95.3,
  'firstTreatment': 85.8
};

function findComparison(sample, average) {
  if (Math.abs(sample - average) < SIMILARITY_THRESHOLD) {
    return 'similar to';
  } else if (sample < average) {
    return 'worse than';
  }
  return 'better than';
}

function calcAverages(ccg) {
  return {
    oneYearSurvivalRate: findComparison(ccg.oneYearSurvivalRate, ENGLISH_AVERAGES.oneYearSurvivalRate),
    specialist: findComparison(ccg.specialist, ENGLISH_AVERAGES.specialist),
    firstTreatment: findComparison(ccg.firstTreatment, ENGLISH_AVERAGES.firstTreatment)
  };
}

export default function usersReducer(state = {
  isFetching: false,
  points: [],
  mapLoadFail: false,
  ccgLoadFail: false,
  ccgSelected: null,
  ccgCodeSelected: '',
  pointHighlighted: null,
  dropdown: 'mortalityRate'
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

      const point = state.points.filter(p => p.ccg === state.ccgCodeSelected)[0];

      point.info = action.ccg;
      point.info.averages = calcAverages(action.ccg);
      point.info.englishAverages = ENGLISH_AVERAGES;

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

    case CHANGE_DROPDOWN:
      return Object.assign({}, state, {
        dropdown: action.item
      });

    default:
      return state;

  }

}
