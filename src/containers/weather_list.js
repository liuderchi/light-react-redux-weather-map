import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import CityWeather from '../components/city_weather';
import { compose, pure, setPropTypes } from 'recompose';

const renderCityWeather = (cityWeather) => (
  <CityWeather key={cityWeather.city.name} cityWeather={cityWeather}/>
)

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
      {weather.map(renderCityWeather)}
    </tbody>
  </table>
)


function mapStateToProps({ weather }) {
  return { weather };   // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(enhance(WeatherList));
