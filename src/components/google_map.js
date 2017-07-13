import React from 'react';
import { compose, lifecycle } from 'recompose';

const BaseComponent = () => <div ref="map" />

const GoogleMap = compose(
  lifecycle({
    componentDidMount: function() {    // called right after component mounted
      const position = {
        lat: this.props.lat,
        lng: this.props.lon
      }
      const map = new google.maps.Map(this.refs.map, {
        zoom: 12,   // map zoom level
        center: position
      });

      new google.maps.Marker({
        position: position,
        map: map
      });
    }
  }),
)(BaseComponent)

export default GoogleMap
