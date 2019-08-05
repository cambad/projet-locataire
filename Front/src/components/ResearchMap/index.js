import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import classNames from 'classnames';
import PropTypes from 'prop-types';
import axios from 'axios';

import './researchmap.scss';

import MapComponent from './GoogleMapComponent';

class ResearchMap extends React.Component {
  state = {
    markers: {},
    infoboxAddress: '',
    infoboxTitle: '',
    infoboxRental: 0,
    isInfoboxVisible: false,
    markerLang: 0,
    markerLat: 0,
    dataLoaded: false,
    newZoom: 15,
  };


  componentDidMount() {
    axios.get('https://api.rate-my-rent.fr/api/apartment/markers')
      .then((results) => {
        this.setState({
          markers: results.data,
          dataLoaded: true,
        });
      });
  }

  componentWillUnmount() {
    const { disableFullscreen, setZoom } = this.props;
    disableFullscreen();
    setZoom(6);
  }

  handleChange = (address) => {
    const { changeAdress } = this.props;
    changeAdress(address);
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => {
        return (getLatLng(results[0]));
      })
      .then((latLng) => {
        const { setAddressLatLng, setZoom, changeAdress } = this.props;
        setZoom(15);
        setAddressLatLng(latLng.lat, latLng.lng);
        changeAdress('');
      })
      .catch(error => console.error('Error', error));
  };

  handleClick = () => {
    const { goToFullScreen, fullscreen } = this.props;
    if (!fullscreen) {
      goToFullScreen();
    }
  };

  handleKeyPress = (event) => {
    const { goToFullScreen, fullscreen } = this.props;
    if (!fullscreen) {
      if (event.key === 'Enter') {
        goToFullScreen();
      }
    }
  };

  handleMarkerClick = (title, address, rental, latMarker, lngMarker) => {
    const { isInfoboxVisible } = this.state;
    this.setState({
      infoboxTitle: title, // Message shown in info window
      infoboxAddress: address,
      infoboxRental: parseFloat(rental),
      isInfoboxVisible: !isInfoboxVisible, // Show info window
      markerLang: lngMarker, // Y coordinate for positioning info window
      markerLat: latMarker, // X coordinate for positioning info window
    });
    const { setAddressLatLng, setZoom } = this.props;
    setZoom(15);
    setAddressLatLng(latMarker, lngMarker);
  }

  handleInfoboxClick = () => {
    this.setState({
      isInfoboxVisible: false,
    });
  }

  render() {
    const {
      address,
      lat,
      lng,
      zoom,
      dropdown,
      fullscreen,
      setZoom,
    } = this.props;
    const {
      markers,
      dataLoaded,
      isInfoboxVisible,
      infoboxAddress,
      infoboxTitle,
      infoboxRental,
      markerLang,
      markerLat,
      newZoom,
    } = this.state;
    const callBackApi = '<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDp8vObJ6bLta43emCo7UbjzErnriO9XaM&libraries=places&callback=myCallbackFunc"></script>';
    return (
      <div className={classNames({ 'research-map': !fullscreen, 'research-map-fullscreen': fullscreen })}>
        <div className={classNames({ autocomplete: !fullscreen, 'autocomplete-hidden': fullscreen })}>
          <h1 className={classNames({ 'autocomplete-title': !fullscreen, 'autocomplete-title-fullscreen': fullscreen })}>Rechercher un appartement</h1>
          <PlacesAutocomplete
            id="placeholder"
            value={address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
            googleCallbackName={callBackApi}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
            }) => (
              <div className={classNames({ research: !fullscreen, 'research-fullscreen': fullscreen })}>
                <input
                  onKeyUp={this.handleKeyPress}
                  className={classNames({ 'location-search-input': !fullscreen, 'location-search-input-fullscreen': fullscreen })}
                  {...getInputProps({
                    placeholder: 'Rechercher une adresse ...',
                  })}
                />
                <div className={classNames({ 'autocomplete-dropdown-container': !fullscreen, 'autocomplete-dropdown-container-fullscreen': fullscreen })}>
                  <h2 className={classNames({ 'dropdown-title-false': !dropdown, 'dropdown-title-true': dropdown })}>Selectionez parmis les suggestions</h2>
                  {suggestions.map((suggestion) => {
                    const className = suggestion.active
                      ? 'suggestion-item--active'
                      : 'suggestion-item';
                    const style = suggestion.active
                      ? {
                        backgroundColor: '#aaa',
                        cursor: 'pointer',
                        marginBottom: '.5em',
                        borderRadius: '10px',
                        padding: '.5em',
                        width: '100%',
                      }
                      : {
                        backgroundColor: '#fff',
                        cursor: 'pointer',
                        marginBottom: '.5em',
                        borderRadius: '10px',
                        padding: '.5em',
                        width: '100%',
                      };
                    return (
                      <div key={suggestion.description} onClick={this.handleClick}>
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          <span key={suggestion.description} className="suggestion">{suggestion.description}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlacesAutocomplete>
        </div>
        <div className={classNames({ 'google-maps': !fullscreen, 'google-maps-fullscreen': fullscreen })}>
          <MapComponent
            lat={lat}
            lng={lng}
            zoom={zoom}
            newZoom={newZoom}
            setZoom={setZoom}
            isInfoboxVisible={isInfoboxVisible} // Show/hide info window
            infoboxAddress={infoboxAddress} // Message shown in info window
            infoboxTitle={infoboxTitle}
            infoboxRental={infoboxRental}
            handleInfoboxClick={this.handleInfoboxClick} // Handle closing of the info window
            handleMarkerClick={this.handleMarkerClick} // Handle click on Marker component
            infoboxPosY={markerLang} // Y coordinate for positioning info window
            infoboxPosX={markerLat} // X coordinate for positioning info window
            markers={markers}
            dataLoaded={dataLoaded}
          />
        </div>
      </div>
    );
  }
}

ResearchMap.propTypes = {
  address: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired,
  dropdown: PropTypes.bool.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  setAddressLatLng: PropTypes.func.isRequired,
  changeAdress: PropTypes.func.isRequired,
  goToFullScreen: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired,
  disableFullscreen: PropTypes.func.isRequired,
};

export default ResearchMap;
