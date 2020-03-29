import humidity from './images/icons/humidity.svg'
import pressure from './images/icons/pressure.svg'
import clearNight from './images/icons/clear-night.svg'
import partlyCloudyDay from './images/icons/partly-cloudy-day-sun.svg'
import rain from './images/icons/rain.svg'
import snow from './images/icons/snow.svg'
import sleet from './images/icons/sleet.svg'
import wind from './images/icons/wind.svg'
import fog from './images/icons/fog.svg'
import cloudy from './images/icons/cloudy.svg'
import partlyCloudyNight from './images/icons/partly-cloudy-night.svg'

import clearDay from './images/icons/clear-day.svg'

export const HUMIDITY_ICON = humidity;
export const PRESSURE_ICON = pressure;


export const WEEK_DAYS = {
  0: {label: 'Niedziela'},
  1: {label: 'Poniedziałek'},
  2: {label: 'Wtorek'},
  3: {label: 'Środa'},
  4: {label: 'Czwartek'},
  5: {label: 'Piątek'},
  6: {label: 'Sobota'},
};

export const ICONS_WEATHER = {
  'clear-day': {iconUrl: clearDay, alt: 'clear-day'},
  'clear-night': {iconUrl: clearNight, alt: 'clear-night'},
  'rain': {iconUrl: rain, alt: 'rain'},
  'snow': {iconUrl: snow, alt: 'snow'},
  'sleet': {iconUrl: sleet, alt: 'sleet'},
  'wind': {iconUrl: wind, alt: 'wind'},
  'fog': {iconUrl: fog, alt: 'fog'},
  'cloudy': {iconUrl: cloudy, alt: 'cloudy'},
  'partly-cloudy-day': {iconUrl: partlyCloudyDay, alt: 'partly-cloudy-day'},
  'partly-cloudy-night': {iconUrl: partlyCloudyNight, alt: 'partly-cloudy-night'},
};
