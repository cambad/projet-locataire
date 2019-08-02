import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

const GoogleMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDp8vObJ6bLta43emCo7UbjzErnriO9XaM&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '80vh' }} />,
    mapElement: <div style={{ height: '80vh' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)((props) => {
  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={{
        lat: props.latLng.lat, // latitude for the center of the map
        lng: props.latLng.lng, // longitude for the center of the map
      }}
      zoom={props.zoom}
      center={{
        lat: props.latLng.lat, // latitude for the center of the map
        lng: props.latLng.lng, // longitude for the center of the map
      }}
      defaultOptions={{
        disableDefaultUI: true, // disable default map UI
        draggable: true, // make map draggable
        keyboardShortcuts: false, // disable keyboard shortcuts
        scaleControl: true, // allow scale controle
        scrollwheel: true, // allow scroll wheel
      }}
    > 
    {props.dataLoaded && (
      props.markers.apartments.map(marker => (
      <Marker
        key={marker.title}
        position={{
          lat: marker.lat, // latitude to position the marker
          lng: marker.lng // longitude to position the marker
        }}
        onClick={(message, lang, lat) =>
          props.handleMarkerClick(
            marker.title,
            marker.lat,
            marker.lng,
          )
        }
      />
    ))
    )}
      {props.isInfoboxVisible && (
        <InfoWindow
          position={{
            lat: props.infoboxPosY,
            lng: props.infoboxPosX
          }}
          onCloseClick={() => props.handleInfoboxClick()}
        >
          <div>
            <h4>{props.infoboxMessage}</h4>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
)});

export default GoogleMapComponent;
