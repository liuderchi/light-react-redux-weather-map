import React from 'react'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

const CityWeather = ({ cityWeather }) => {
  const { lat, lon } = cityWeather.city.coord
  const temps = cityWeather.list.map(weather => weather.main.temp)
  const pressures = cityWeather.list.map(weather => weather.main.pressure)
  const humidities = cityWeather.list.map(weather => weather.main.humidity)

  return (
    <tr>
      <td><GoogleMap lat={lat} lon={lon} /></td>
      <td><Chart data={temps} units="K" color="green"/></td>
      <td><Chart data={pressures} units="hPa" color="blue"/></td>
      <td><Chart data={humidities} units="%" color="brown"/></td>
    </tr>
  )
}

export default CityWeather
