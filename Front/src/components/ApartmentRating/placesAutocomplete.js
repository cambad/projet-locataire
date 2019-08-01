import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import './apartmentRating.scss';

const PlaceAutocomplete = ({
  address,
  handleChange,
}) => (
  <PlacesAutocomplete
    className="placeholder"
    value={address}
    onChange={handleChange}
  >
    {({
      getInputProps,
      suggestions,
      getSuggestionItemProps,
    }) => (
      <div className="address-input">
        <input
          {...getInputProps({
            placeholder: 'Adresse de l\'appartement...',
          })}
        />
        <div className="autocomplete-dropdown">
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
              }
              : {
                backgroundColor: '#fff',
                cursor: 'pointer',
                marginBottom: '.5em',
                borderRadius: '10px',
                padding: '.5em',
              };
            return (
              <div>
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
);


export default PlaceAutocomplete;
