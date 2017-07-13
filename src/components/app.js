import React from 'react'
import SearchBar from '../containers/search_bar.js'
import WeatherList from '../containers/weather_list.js'

const App = () => {
  return (
    <div>
      <h1>Weather Helper</h1>
      <SearchBar />
      <WeatherList />
    </div>
  )
}

export default App
