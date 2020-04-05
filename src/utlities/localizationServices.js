import { API_KEY_DARKSKY, API_KEY_OPEN_WEATHER_MAP } from '../config/config'

export const getLongTermWeather = async (latitude, longitude) => {
  try {
    const data = await fetch(`https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/${API_KEY_DARKSKY}/${latitude},${longitude}?exclude=currently,flags,hourly`)
      .then((response) => (
        response.json()
      ));
    return data;
  } catch (error) {
    console.log(error)
  }
};


export const getCurrentWeather = async (latitude, longitude) => {
  try {
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY_OPEN_WEATHER_MAP}&units=metric`)
      .then((response) => {
        return response.json();
      });
    return data
  } catch (error) {
    console.log(error)
  }
};

export const getCurrentWeatherByCityName = async (cityName) => {
  try {
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY_OPEN_WEATHER_MAP}&units=metric`)
      .then((response) => {
        return response.json();
      });
    return data
  } catch (error) {
    console.log(error)
  }
};
