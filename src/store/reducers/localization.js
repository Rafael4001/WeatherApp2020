import { SET_CURRENT_LOCALIZATION } from './../actions'

const defaultState = {
  currentCity: '',
  currentLatitude: 0,
  currentLongitude: 0,
};


const localization = (state = defaultState, action) => {
  switch (action.type) {
    case SET_CURRENT_LOCALIZATION: {
      return {
        ...state,
        currentLatitude: action.currentLatitude,
        currentLongitude: action.currentLongitude,
      }
    }
    default:
      return state
  }
};

export default localization


export const getLatAndLong = (latitude, longitude) => ({
  latitude,
  longitude
});