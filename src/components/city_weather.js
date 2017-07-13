import React, { PropTypes } from 'react'
import Chart from '../components/chart'
import GoogleMap from '../components/google_map'
import { compose, pure, mapProps, setPropTypes } from 'recompose'

const enhance = compose(
  pure,
  mapProps((props) => {
    const { cityWeather } = props
    const { coord: { lat, lon} } = cityWeather.city
    return {
      ...props,
      lat,
      lon,
      temps: cityWeather.list.map(weather => weather.main.temp),
      pressures: cityWeather.list.map(weather => weather.main.pressure),
      humidities: cityWeather.list.map(weather => weather.main.humidity),
    }
  }),
  setPropTypes({
    lat: PropTypes.number,
    lon: PropTypes.number,
    temps: PropTypes.arrayOf(PropTypes.number),
    pressures: PropTypes.arrayOf(PropTypes.number),
    humidities: PropTypes.arrayOf(PropTypes.number),
  })
)

const CityWeather = ({ lat, lon, temps, pressures, humidities }) => (
  <tr>
    <td><GoogleMap lat={lat} lon={lon} /></td>
    <td><Chart data={temps} units="K" color="green"/></td>
    <td><Chart data={pressures} units="hPa" color="blue"/></td>
    <td><Chart data={humidities} units="%" color="brown"/></td>
  </tr>
)

export default enhance(CityWeather)
