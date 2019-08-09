import React from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

// locals imports
import './research.scss';
import Connection from 'src/containers/Connection';
import ResearchForm from './ResearchForm';
import LastFiveReviews from './LastFiveReviews';

class Research extends React.Component {
  // State to user modal
  state = {
    isModalOpen: false,
  }

  // Use to set the scroll bar to the top to display the pop submiFormDone
  componentWillMount() {
    // To set scrollbar on top
    window.scrollTo(0, 0);
    console.log('WILL MOUNT');
  }

  // componentDidUpdate() {
  //   console.log('DID UPDATE');
  //   const { isConnected } = this.props;
  //   if (isConnected) {
  //     this.deleteConnectionAnimation();
  //   }
  // }

  componentDidMount() {
    console.log('DID MOUNT');
  }

  // set submiFormDone to false
  componentWillUnmount() {
    const { formSubmitDoneToFalse } = this.props;
    console.log('WILL UNMOUNT');
    formSubmitDoneToFalse();
  }

  deleteConnectionAnimation = () => {
    const { connectionAnimationToFalse } = this.props;
    connectionAnimationToFalse();
  }

  // To display connection modal
  handleOpen = () => (
    this.setState({
      isModalOpen: true,
    })
  );

  // To hide display connection
  handleClose = () => (
    this.setState({
      isModalOpen: false,
    })
  );

  handleChange = (event) => {
    const { changeAdress } = this.props;
    const { value } = event.target;
    changeAdress(value);
  };

  // Submit form
  handleSubmit = (e) => {
    e.preventDefault();
    const {
      address,
      setRedirectToMap,
      setAddressLatLng,
      setZoom,
    } = this.props;
    if (address) {
      geocodeByAddress(address)
        .then(results => (getLatLng(results[0])))
        .then((latLng) => {
          // set state.redirectToMap to TRUE to redirect to ResearchMap in full screen
          setRedirectToMap();
          // Setting the zoom
          setZoom(15);
          // insert lat and lng in state
          setAddressLatLng(latLng.lat, latLng.lng);
        })
        .catch(error => console.error('Error', error));
    }
  };

  render() {
    const { isModalOpen } = this.state;
    const {
      address,
      redirectToMap,
      setRedirectToMapFalse,
      formSubmitDone,
      isConnected,
      landingPage,
      setLandingPageToFalse,
      connectionAnimation,
    } = this.props;

    if (landingPage) {
      setLandingPageToFalse();
    }

    if (redirectToMap) {
      // set state.redirectToMap to FALSE and address to an empty string
      setRedirectToMapFalse();
      // return to landing page
      return <Redirect to="/recherche/" />;
    }

    return (
      <main className="landing">
        <div className="homePhoto">
          <div className="presentation">
            {formSubmitDone && (
              <span className="formSubmitDone">
                Formulaire envoyé
              </span>
            )}
            {/* {connectionAnimation && (
              <span className="formSubmitDone">
                Vous êtes connecté
              </span>
            )} */}
            <h2 className="presentation-title">Vous déménagez ou avez visité un logement ?</h2>
            <h2 className="presentation-subtitle">Vous pouvez le noter pour aider la communauté !</h2>
            <h4 className="presentation-desc">Sur Rate My Rent, profitez des avis pour faciliter vos recherches et gagner du temps !</h4>
          </div>
          <div className="recherche">
            <div className="recherche-zone">
              <h2 className="recherche-title">Rechercher un appartement</h2>
              <ResearchForm
                address={address}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            </div>
            <div className="noter">
              <h1 className="noter-title">
                A votre tour, notez votre logement !
              </h1>
              {!isConnected && (
                <React.Fragment>
                  <button className="noter-button" onClick={this.handleOpen} type="button" href="#">Noter un logement</button>
                  { isModalOpen === true && <Connection isModalOpen={isModalOpen} handleClose={this.handleClose} /> }
                </React.Fragment>
              )}
              {isConnected && (
                <NavLink to="/noter-un-appartement"><button className="noter-button" type="button">Noter un logement</button></NavLink>
              )}
            </div>
          </div>
        </div>
        <LastFiveReviews />
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDp8vObJ6bLta43emCo7UbjzErnriO9XaM&libraries=places" />
      </main>
    );
  }
}


Research.propTypes = {
  address: PropTypes.string.isRequired,
  changeAdress: PropTypes.func.isRequired,
  redirectToMap: PropTypes.bool.isRequired,
  formSubmitDone: PropTypes.bool.isRequired, // received from reducer.js
  setRedirectToMap: PropTypes.func.isRequired,
  setAddressLatLng: PropTypes.func.isRequired,
  setRedirectToMapFalse: PropTypes.func.isRequired,
  setZoom: PropTypes.func.isRequired,
  formSubmitDoneToFalse: PropTypes.func.isRequired,
  isConnected: PropTypes.bool.isRequired, // received from reducer.js
  connectionAnimation: PropTypes.bool.isRequired,
  connectionAnimationToFalse: PropTypes.func.isRequired,
};

export default Research;
