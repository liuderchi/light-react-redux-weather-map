import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  constructor(props) {
    super(props);

  }

  renderWeather(cityData) {    // render weather for each city
    const { name, coord } = cityData.city;
    const temps = cityData.list.map(weather => { return weather.main.temp; });
    const pressures = cityData.list.map(weather => { return weather.main.pressure; });
    const humidities = cityData.list.map(weather => { return weather.main.humidity; });

    return (
      <tr key={name}>
        <td><GoogleMap lat={coord.lat} lon={coord.lon} /></td>
        <td><Chart data={temps} units="K" color="green"/></td>
        <td><Chart data={pressures} units="hPa" color="blue"/></td>
        <td><Chart data={humidities} units="%" color="brown"/></td>
      </tr>
    )
  }

  render() {

    return (
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
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}


function mapStateToProps({ weather }) {
  return { weather };   // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
