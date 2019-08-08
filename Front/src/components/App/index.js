import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import decode from 'jwt-decode';

import Header from 'src/components/Header';
import Research from 'src/containers/Research';
import Footer from 'src/components/Footer';
import Register from 'src/containers/Register';
import Contact from 'src/components/Contact';
import ResearchMap from 'src/containers/ResearchMap';
import Profil from 'src/components/Profil';
import ApartmentComponent from 'src/components/Apartment';
import AppartmentRating from 'src/containers/ApartmentRating';

import './app.scss';

const App = ({ token, deleteToken, changeIsConnected }) => {
  // test if a token is in reducer a display navigation bar if a token is visible
  if (token !== '') {
    // get a boolean : true => token is expired
    const expDate = decode(token).exp < Date.now() / 1000;
    // test expiration date : if true, delete token
    if (expDate) {
      deleteToken();
    }
    // change reducer to display connected navigation bar
    changeIsConnected();
  }
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Research} />
        <Route path="/contact" component={Contact} />
        <Route path="/inscription" component={Register} />
        <Route path="/recherche" component={ResearchMap} />
        <Route path="/profil" component={Profil} />
        <Route path="/noter-un-appartement" component={AppartmentRating} />
        <Route path="/appartement/:id" component={ApartmentComponent} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
};

// props validation
App.propTypes = {
  token: PropTypes.string.isRequired,
  deleteToken: PropTypes.func.isRequired,
  changeIsConnected: PropTypes.func.isRequired,
};

export default App;
