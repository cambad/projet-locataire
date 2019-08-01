import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames';

import './researchmap.scss';

import Marker from './Marker';


const researchMap = ({
  address,
  latLng,
  zoom,
  dropdown, 
  fullscreen,
  setAddressLatLng,
  changeAdress,
}) => {
  const handleChange = (event) => {
    changeAdress(event.target.value);
  };

  const handleSelect = () => {
    geocodeByAddress(address)
      .then((results) => {
        console.log(results);
        return (getLatLng(results[0]));
      })
      .then((latLng) => {
        console.log(latLng);
        setAddressLatLng(latLng);
      })
      .catch(error => console.error('Error', error));
  };

  const handleClick = () => {
    this.setState({
      fullscreen: true,
      dropdown: false,
      address: '',
    });
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      this.setState({
        fullscreen: true,
        dropdown: false,
        address: '',
      });
    }
  }

  return (
    <div className={classNames({ 'research-map': !fullscreen, 'research-map-fullscreen': fullscreen })}>
      <div className={classNames({ autocomplete: !fullscreen, 'autocomplete-hidden': fullscreen })}>
        <h1 className={classNames({ 'autocomplete-title': !fullscreen, 'autocomplete-title-fullscreen': fullscreen })}>Rechercher un appartement</h1>
        <PlacesAutocomplete
          id="placeholder"
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
          }) => (
            <div className={classNames({ research: !fullscreen, 'research-fullscreen': fullscreen })}>
              <input
                onKeyUp={handleKeyPress}
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
                    <div onClick={handleClick}>
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
          defaultCenter={{ lat: 30, lng: 1 }}
          defaultZoom={zoom}
          zoom={zoom}
        />
      </div>
    </div>
  );
};

export default researchMap;
