import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import PropTypes from 'prop-types';

import './apartmentRating.scss';

const PlaceAutocomplete = ({
  address,
  handleChange,
  handleSelect,
}) => (
  <PlacesAutocomplete
    className="placeholder"
    value={address}
    onChange={handleChange}
    onSelect={handleSelect}
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


// props validation
PlaceAutocomplete.propTypes = {
  address: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
};


export default PlaceAutocomplete;
