import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames';

import './researchmap.scss';

import Marker from './Marker';


class researchMap extends React.Component {
  state = {
    address: '',
    latLng: {
      lat: 46.1558,
      lng: -1.1532,
    },
    zoom: 11,
    fullscreen: false,
    dropdown: false,
  };

  handleChange = (address) => {
    this.setState({
      address,
      dropdown: true,
    });
    if (address === '') {
      this.setState({
        dropdown: false,
      });
    }
  };

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => {
        console.log(results);
        return (getLatLng(results[0]));
      })
      .then((latLng) => {
        console.log(latLng);
        return (
          this.setState({
            ...this.state,
            zoom: 15,
            latLng,
          })
        );
      })
      .catch(error => console.error('Error', error));
  };

  handleClick = () => {
    this.setState({
      fullscreen: true,
      dropdown: false,
    });
  }

  handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        fullscreen: true,
        dropdown: false,
      });
    }
  }

  render() {
    const {
      fullscreen,
      address,
      latLng,
      zoom,
      dropdown,
    } = this.state;
    return (
      <body>
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
                          marginBottom: '1em',
                          borderRadius: '25px',
                          height: 'auto',
                          padding: '.5em',
                        }
                        : {
                          backgroundColor: '#fff',
                          cursor: 'pointer',
                          marginBottom: '1em',
                          borderRadius: '25px',
                          height: 'auto',
                          padding: '.5em',
                        };
                      return (
                        <div onClick={this.handleClick}>
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span className="suggestion">{suggestion.description}</span>
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
              defaultCenter={{ lat: latLng.lat, lng: latLng.lng }}
              defaultZoom={zoom}
              center={{ lat: latLng.lat, lng: latLng.lng }}
              zoom={zoom}
            >
              <Marker
                lat={45.2491}
                lng={-0.252403}
                title="Maison Johann"
                color="blue"
              />
              <Marker
                lat={43.4259}
                lng={6.43131}
                title="Maison Camille"
                color="green"
              />
              <Marker
                lat={46.0522}
                lng={6.3314}
                title="Maison Maxime"
                color="purple"
              />
              <Marker
                lat={48.879}
                lng={2.19946}
                title="Maison Alex"
                color="orange"
              />
            </GoogleMapReact>
          </div>
        </div>
      </body>
    );
  }
}

export default researchMap;
