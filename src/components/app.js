import React, { Component } from 'react';
import SearchBar from '../containers/search_bar.js';
import WeatherList from '../containers/weather_list.js';

export default () => {
  return (
    <div>
      <h1>Weather Helper</h1>
      <SearchBar />
      <WeatherList />
    </div>
  );
}
