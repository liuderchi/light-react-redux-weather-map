import React from 'react'
import { compose, pure, lifecycle } from 'recompose'

const BaseComponent = () => <div ref="map" />

const GoogleMap = compose(
  pure,
  lifecycle({
    componentDidMount() {
      const position = {
        lat: this.props.lat,
        lng: this.props.lon,
      }
      const map = new google.maps.Map(this.refs.map, {
        zoom: 12,   // map zoom level
        center: position,
      })

      new google.maps.Marker({ position, map })
    },
  })
)(BaseComponent)

export default GoogleMap
