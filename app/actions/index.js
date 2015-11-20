/* @flow */
import WebAPI from '../util/WebAPI';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_CCG_FAIL = 'LOAD_CCG_FAIL';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const RECEIVE_MAP = 'RECEIVE_MAP';
export const LOAD_MAP_FAIL = 'LOAD_MAP_FAIL';
export const REQUEST_MAP = 'REQUEST_MAP';
export const REQUEST_INTERVAL_START = 'REQUEST_INTERVAL_START';
export const REQUEST_CCG = 'REQUEST_CCG';
export const RECEIVE_CCG = 'RECEIVE_CCG';
export const POINT_HIGHLIGHTED = 'POINT_HIGHLIGHTED';
export const CHANGE_DROPDOWN = 'CHANGE_DROPDOWN';
export const RESET_INFOPANEL = 'RESET_INFOPANEL';


export function getMap(dispatch) {

  dispatch({
    type: REQUEST_MAP
  });

  return WebAPI.getMap()
    .then((points) => {

      dispatch({
        type: RECEIVE_MAP,
        points: points
      });

    })
    .catch((err) => {
      dispatch({
        type: LOAD_MAP_FAIL,
        error: err
      });
    });
}

export function getCcgFromCache(state, ccg) {
  const point = state.points.filter(c => c.ccg === ccg)[0];

  return point.info;
}

export function getCcg(ccgCode) {
  return (dispatch, getState) => {

    dispatch({
      type: REQUEST_CCG,
      ccgCodeSelected: ccgCode
    });

    const cachedCcgInfo = getCcgFromCache(getState(), ccgCode);
    if (cachedCcgInfo) {

      dispatch({
        type: RECEIVE_CCG,
        ccg: cachedCcgInfo
      });

    } else {
      return WebAPI.getCcg(ccgCode)
      .then((ccg) => {
        const ccgData = ccg[0];

        if (ccgData) {
          dispatch({
            type: RECEIVE_CCG,
            ccg: ccgData
          });
        } else {
          dispatch({
            type: LOAD_CCG_FAIL,
            err: 'No information available for ccg'
          });
        }

      })
      .catch((err) => {
        dispatch({
          type: LOAD_CCG_FAIL,
          err: err
        });
      });
    }
  };
}

export function resetInfoPanel() {
  return (dispatch) => {
    dispatch({
      type: RESET_INFOPANEL
    });
  };
}

export function changeDropdown(item) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_DROPDOWN,
      item
    });
  };
}

export function highlightPoint(point) {
  return (dispatch) => {
    dispatch({
      type: POINT_HIGHLIGHTED,
      point
    });
  };
}
