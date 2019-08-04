import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';

import './marker.scss';

const GoogleMapComponent = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDp8vObJ6bLta43emCo7UbjzErnriO9XaM&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '80vh' }} />,
    mapElement: <div style={{ height: '80vh' }} />,
  }),
  withScriptjs,
  withGoogleMap,
);

const Map = ((props) => {
  const {
    zoom,
    latLng,
    dataLoaded,
    markers,
    handleMarkerClick,
    isInfoboxVisible,
    infoboxPosY,
    infoboxPosX,
    handleInfoboxClick,
    infoboxAddress,
    infoboxTitle,
  } = props;
  return (
    <GoogleMap
      defaultCenter={{
        lat: latLng.lat, // latitude for the center of the map
        lng: latLng.lng, // longitude for the center of the map
      }}
      zoom={zoom}
      center={{
        lat: latLng.lat, // latitude for the center of the map
        lng: latLng.lng, // longitude for the center of the map
      }}
      defaultOptions={{ mapTypeControl: false }}
    >
      {dataLoaded && (
        markers.apartments.map(marker => (
          <Marker
            key={marker.title}
            position={{
              lat: marker.lat, // latitude to position the marker
              lng: marker.lng // longitude to position the marker
            }}
            onMouseOver={(title, address, lng, lat) =>
              handleMarkerClick(
                marker.title,
                marker.adress,
                marker.lat,
                marker.lng,
              )
            }
          />
        ))
      )}
      {isInfoboxVisible && (
        <InfoWindow
          position={{
            lat: infoboxPosY,
            lng: infoboxPosX,
          }}
          onCloseClick={() => handleInfoboxClick()}
        >
          <div className="infobox">
            <h1>{infoboxTitle}</h1>
            <p>{infoboxAddress}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
});

const MapComponent = GoogleMapComponent(Map);

export default MapComponent;
