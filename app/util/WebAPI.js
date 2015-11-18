/* @flow */

import 'whatwg-fetch';

function JSONResponse(response) {
  try {
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}

export default {

  getMap() {
    return fetch(`${API_URL}/api/ccd/map`)
      .then(JSONResponse);
  },

  getCcd(ccdCode) {
    return fetch(`${API_URL}/api/ccd/${ccdCode}`)
      .then(JSONResponse);
  },

  getMoreInfoFor(ccdCode) {
    return fetch(`${API_URL}/api/ccd/${ccdCode}/full`)
      .then(JSONResponse);
  }

};
