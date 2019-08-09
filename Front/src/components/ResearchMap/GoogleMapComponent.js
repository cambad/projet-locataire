import React from 'react';
import { compose, withProps } from 'recompose';
import Rating from '@material-ui/lab/Rating';
import { NavLink } from 'react-router-dom';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import PropTypes from 'prop-types';

import './infobox.scss';

const apiURL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDp8vObJ6bLta43emCo7UbjzErnriO9XaM&v=3.exp&libraries=geometry,drawing,places';
const GoogleMapComponent = compose(
  withProps({
    googleMapURL: apiURL,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '80vh' }} />,
    mapElement: <div className="map-element" />,
  }),
  withScriptjs,
  withGoogleMap,
);

const Map = (props) => {
  const mapRef = React.useRef();

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
    infoboxRental,
    id,
    average,
  } = props;
  return  (
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
        markers.apartments.map((marker) => {
          const {
            contact,
            exterior,
            interior,
            recommendation,
          } = marker;
          const average = (contact + exterior + interior + recommendation) / 4;
          return (
            <Marker
              key={marker.id}
              position={{
                lat: parseFloat(marker.lat), // latitude to position the marker
                lng: parseFloat(marker.lng), // longitude to position the marker
              }}
              onClick={() => (
                handleMarkerClick(
                  marker.title,
                  marker.address,
                  marker.rental,
                  marker.lat,
                  marker.lng,
                  marker.id,
                  average,
                )
              )}
            />
          );
        })
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
            <h1 className="infobox-title">{infoboxTitle}</h1>
            <p className="infobox-address">{infoboxAddress}</p>
            <p className="infobox-rent">Loyer: {infoboxRental} €</p>
            <p className="infobox-rating">Note générale :</p>
            <Rating readOnly name="general-rating" value={average} />
            <p className="infobox-seemore"><NavLink to={`/appartement/${id}`}>Voir détails</NavLink></p>
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
  infoboxRental: PropTypes.number.isRequired,
};

const MapComponent = GoogleMapComponent(Map);

export default MapComponent;
