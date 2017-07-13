import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
import { compose, pure, setPropTypes } from 'recompose';

const renderWeather = (cityData) => {    // render weather for each city
  const { name, coord: { lat, lon } } = cityData.city;
  const temps = cityData.list.map(weather => weather.main.temp);
  const pressures = cityData.list.map(weather => weather.main.pressure);
  const humidities = cityData.list.map(weather => weather.main.humidity);

  return (
    <tr key={name}>
      <td><GoogleMap lat={lat} lon={lon} /></td>
      <td><Chart data={temps} units="K" color="green"/></td>
      <td><Chart data={pressures} units="hPa" color="blue"/></td>
      <td><Chart data={humidities} units="%" color="brown"/></td>
    </tr>
  )
}

const enhance = compose(
  pure,
  setPropTypes({ weather: PropTypes.array })
)

const WeatherList = ({ weather }) => (
  <table className="table table-hover">
    <thead>
      <tr>
        <th>City</th>
        <th>Temperature (K)</th>
        <th>Pressure (hPa)</th>
        <th>Humidity (%)</th>
      </tr>
    </thead>
    <tbody>
      {weather.map(renderWeather)}
    </tbody>
  </table>
)


function mapStateToProps({ weather }) {
  return { weather };   // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(enhance(WeatherList));
