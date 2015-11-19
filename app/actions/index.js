/* @flow */
import WebAPI from '../util/WebAPI';

export const LOAD_USERS = 'LOAD_USERS';
export const LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS';
export const RECEIVE_MAP = 'RECEIVE_MAP';
export const LOAD_MAP_FAIL = 'LOAD_MAP_FAIL';
export const REQUEST_MAP = 'REQUEST_MAP';
export const REQUEST_INTERVAL_START = 'REQUEST_INTERVAL_START';

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
