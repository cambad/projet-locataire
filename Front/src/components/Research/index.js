import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// locals imports
import './research.scss';
import ResearchForm from './ResearchForm';
import LastFiveReviews from './LastFiveReviews';

class Research extends React.Component {
  handleChange = (event) => {
    const { changeAdress } = this.props;
    const { value } = event.target;
    changeAdress(value);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { address, setRedirectToMap, setAddressLatLng } = this.props;
    if (address) {
      geocodeByAddress(address)
        .then((results) => {
          return (getLatLng(results[0]));
        })
        .then((latLng) => {
          console.log(latLng);
          setRedirectToMap();
          setAddressLatLng(latLng);
        })
        .catch(error => console.error('Error', error));
    }
  };

  render() {
    const { address, redirectToMap, setRedirectToMapFalse } = this.props;
    if (redirectToMap) {
      setRedirectToMapFalse();
      return <Redirect to="/recherche/" />;
    }
    return (
      <main className="accueil">
        <div className="homePhoto">
          <div className="presentation">
            <h2 className="presentation-title">Bienvenue sur Rate my Rent</h2>
            <h4 className="presentation-subtitle">Le site de notation des bons et mauvais appartements</h4>
          </div>
          <div className="recherche">
            <div className="recherche-zone">
              <h2 className="recherche-title">Rechercher un appartement</h2>
              <ResearchForm address={address} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
            </div>
            <div className="noter">
              <h1 className="noter-title">
                A votre tour, notez votre logement !
              </h1>
              <NavLink to="/noter-un-appartement"><button className="noter-button" type="button">Noter un logement</button></NavLink>
            </div>
          </div>
        </div>
        <LastFiveReviews />
      </main>
    );
  }
}


Research.propTypes = {
  address: PropTypes.string.isRequired,
  changeAdress: PropTypes.func.isRequired,
  redirectToMap: PropTypes.bool.isRequired,
  setRedirectToMap: PropTypes.func.isRequired,
  setAddressLatLng: PropTypes.func.isRequired,
  setRedirectToMapFalse: PropTypes.func.isRequired,
};

export default Research;
