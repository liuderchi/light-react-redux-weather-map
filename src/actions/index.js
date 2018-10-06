import axios from 'axios'

const CORS_ANYWHERE_DOMAIN = 'https://cors-anywhere.herokuapp.com'
const API_KEY = '8da17980896fadeb0d58e0b0621f64b7'
const OPEN_WEATHER_MAP_API = 'http://api.openweathermap.org/data/2.5/forecast'

export const FETCH_WEATHER = 'FETCH_WEATHER'
// use variable to store action type for better maintainability

export function fetchWeather(city) {
  const url = `${CORS_ANYWHERE_DOMAIN}/${OPEN_WEATHER_MAP_API}` +
    `?q=${city}&appid=${API_KEY}`
  let request = axios.get(url)
  // NOTE request is a promise

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
