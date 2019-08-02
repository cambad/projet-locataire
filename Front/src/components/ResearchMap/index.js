import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
// import GoogleMapReact from 'google-map-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import axios from 'axios';

import './researchmap.scss';

// import Marker from './Marker';
import GoogleMapComponent from './GoogleMapComponent';

class ResearchMap extends React.Component {
  state = {
    markers: {},
    infoboxMessage: '',
    isInfoboxVisible: false,
    markerLang: 0,
    markerLat: 0,
    dataLoaded: false,
  };


  componentDidMount() {
    axios.get('https://api.rate-my-rent.fr/api/markers')
      .then((results) => {
        this.setState({
          markers: results.data,
          dataLoaded: true,
        });
      });
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
        const { setAddressLatLng } = this.props;
        console.log(latLng);
        setAddressLatLng(latLng);
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

  handleMarkerClick = (message, lang, lat) => {
    this.setState({
      infoboxMessage: message, // Message shown in info window
      isInfoboxVisible: !this.state.isInfoboxVisible, // Show info window
      markerLang: lang + 0.006, // Y coordinate for positioning info window
      markerLat: lat - 0.0004 // X coordinate for positioning info window
    });
  }

  handleInfoboxClick = () => {
    this.setState({
      isInfoboxVisible: false,
    });
  }

  render() {
    const {
      address,
      latLng,
      zoom,
      dropdown,
      fullscreen,
    } = this.props;
    const {
      markers,
      dataLoaded,
    } = this.state;
    return (
      <div className={classNames({ 'research-map': !fullscreen, 'research-map-fullscreen': fullscreen })}>
        <div className={classNames({ autocomplete: !fullscreen, 'autocomplete-hidden': fullscreen })}>
          <h1 className={classNames({ 'autocomplete-title': !fullscreen, 'autocomplete-title-fullscreen': fullscreen })}>Rechercher un appartement</h1>
          <PlacesAutocomplete
            id="placeholder"
            value={address}
            onChange={this.handleChange}
            onSelect={this.handleSelect}
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
          <GoogleMapComponent
            latLng={latLng}
            zoom={zoom}
            isInfoboxVisible={this.state.isInfoboxVisible} // Show/hide info window
            infoboxMessage={this.state.infoboxMessage} // Message shown in info window
            handleInfoboxClick={this.handleInfoboxClick} // Handle closing of the info window
            handleMarkerClick={this.handleMarkerClick} // Handle click on Marker component
            infoboxPosY={this.state.markerLang} // Y coordinate for positioning info window
            infoboxPosX={this.state.markerLat} // X coordinate for positioning info window
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
  latLng: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  zoom: PropTypes.number.isRequired,
  dropdown: PropTypes.bool.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  setAddressLatLng: PropTypes.func.isRequired,
  changeAdress: PropTypes.func.isRequired,
  goToFullScreen: PropTypes.func.isRequired,
};

export default ResearchMap;
