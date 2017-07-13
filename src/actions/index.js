import axios from 'axios'

const API_KEY = '8da17980896fadeb0d58e0b0621f64b7'
const COUNTRY_CODE = 'TW'
const ROOT_UTL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'
// use variable to store action type for better maintainability

export function fetchWeather(city) {
  const url = `${ROOT_UTL}&q=${city},${COUNTRY_CODE}`
  let request = axios.get(url)
  // NOTE request is a promise

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
