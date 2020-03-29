export const SET_CURRENT_LOCALIZATION = 'SET_CURRENT_LOCALIZATION';


export const setLatAndLong = (latitude, longitude) => ({
  type: SET_CURRENT_LOCALIZATION,
  currentLatitude: latitude,
  currentLongitude: longitude
});

