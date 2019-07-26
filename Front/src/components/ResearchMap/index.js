import React from 'react';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import GoogleMapReact from 'google-map-react';

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
  };

  handleChange = (address) => {
    this.setState({
      address,
    });
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
            zoom: 20,
            latLng,
          })
        );
      })
      .catch(error => console.error('Error', error));
  };


  render() {
    return (
      <div className="research-map">
        <div className="image">
          <div className="autocomplete">
            <h1 className="autocomplete-title">Rechercher un appartement</h1>
            <PlacesAutocomplete
              id="placeholder"
              value={this.state.address}
              onChange={this.handleChange}
              onSelect={this.handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div className="research">
                  <input
                    {...getInputProps({
                      placeholder: 'Rechercher une adresse ...',
                      className: 'location-search-input',
                    })}
                  />
                  <div className="autocomplete-dropdown-container">
                    {loading && <div>Chargement...</div>}
                    <h2 className="dropdown-title">Selectionez parmis les suggestions</h2>
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? 'suggestion-item--active'
                        : 'suggestion-item';
                      const style = suggestion.active
                        ? { backgroundColor: '#aaa', cursor: 'pointer', marginBottom: '1em', borderRadius: '25px', height: 'auto', padding: '.5em' }
                        : { backgroundColor: '#fff', cursor: 'pointer', marginBottom: '1em', borderRadius: '25px', height: 'auto', padding: '.5em' };
                      return (
                        <div>
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              style,
                            })}
                          >
                            <span>{suggestion.description}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>
          </div>
        </div>
        <div className="google-maps">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyDp8vObJ6bLta43emCo7UbjzErnriO9XaM' }}
            defaultCenter={{ lat: this.state.latLng.lat, lng: this.state.latLng.lng }}
            defaultZoom={this.state.zoom}
            center={{ lat: this.state.latLng.lat, lng: this.state.latLng.lng }}
            zoom={this.state.zoom}
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
    );
  }
}

export default researchMap;
