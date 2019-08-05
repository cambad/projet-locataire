import React from 'react';
import { compose, withProps } from 'recompose';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import PropTypes from 'prop-types';

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

const Map = (props) => {
  const mapRef = React.createRef();

  const onZoomChanged = () => {
    const { setZoom } = props;
    const currentZoom = mapRef.current.getZoom();
    const newZoom = parseFloat(currentZoom);
    setZoom(newZoom);
  };

  const {
    zoom,
    lat,
    lng,
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
      ref={mapRef}
      defaultCenter={{
        lat: parseFloat(lat), // latitude for the default center of the map
        lng: parseFloat(lng), // longitude for the default center of the map
      }}
      zoom={zoom}
      center={{
        lat: parseFloat(lat), // latitude for the center of the map
        lng: parseFloat(lng), // longitude for the center of the map
      }}
      defaultOptions={{ mapTypeControl: false }}
      onZoomChanged={onZoomChanged}
    >
      {dataLoaded && (
        markers.apartments.map(marker => (
          <Marker
            key={marker.id}
            position={{
              lat: parseFloat(marker.lat), // latitude to position the marker
              lng: parseFloat(marker.lng), // longitude to position the marker
            }}
            onClick={() => (
              handleMarkerClick(
                marker.title,
                marker.adress,
                marker.lat,
                marker.lng,
              )
            )}
          />
        ))
      )}
      {isInfoboxVisible && (
        <InfoWindow
          position={{
            lat: infoboxPosX,
            lng: infoboxPosY,
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
};

Map.propTypes = {
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  dataLoaded: PropTypes.bool.isRequired,
  markers: PropTypes.object.isRequired,
  handleMarkerClick: PropTypes.func.isRequired,
  isInfoboxVisible: PropTypes.bool.isRequired,
  infoboxPosY: PropTypes.number.isRequired,
  infoboxPosX: PropTypes.number.isRequired,
  handleInfoboxClick: PropTypes.func.isRequired,
  infoboxAddress: PropTypes.string.isRequired,
  infoboxTitle: PropTypes.string.isRequired,
  setZoom: PropTypes.func.isRequired,
};

const MapComponent = GoogleMapComponent(Map);

export default MapComponent;
