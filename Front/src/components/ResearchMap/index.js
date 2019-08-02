import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import axios from 'axios';

import './researchmap.scss';

import Marker from './Marker';


class ResearchMap extends React.Component {
  state = {
    markers: [],
  };

  componentDidMount() {
    axios.get('https://api.rate-my-rent.fr/api/19/marker')
      .then((results) => {
        console.log(results);
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

  render() {
    const {
      address,
      latLng,
      zoom,
      dropdown,
      fullscreen,
    } = this.props;
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
                      <div onClick={this.handleClick}>
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
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDp8vObJ6bLta43emCo7UbjzErnriO9XaM' }}
            defaultCenter={latLng}
            center={latLng}
            defaultZoom={zoom}
            zoom={zoom}
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
