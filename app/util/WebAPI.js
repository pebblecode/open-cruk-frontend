/* @flow */

import 'whatwg-fetch';

function JSONResponse(response) {
  try {
    return response.json();
  } catch (e) {
    throw new Error(e);
  }
}

const API_URL = 'https://pebblecode-cruk-api.herokuapp.com';

export default {

  getMap() {
    return fetch(`${API_URL}/api/ccg/map`)
      .then(JSONResponse);
  },

  getCcg(ccgCode) {
    return fetch(`${API_URL}/api/ccg/${ccgCode}`)
      .then(JSONResponse);
  },

  getMoreInfoFor(ccgCode) {
    return fetch(`${API_URL}/api/ccg/${ccgCode}/full`)
      .then(JSONResponse);
  }

};
