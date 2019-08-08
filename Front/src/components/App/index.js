import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

// import local
import AuthenticationMethods from 'src/components/AuthenticationMethods';
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

const App = ({ changeIsConnected }) => {

  /**
   * Checking first time on "rate my Rent"
   */
  // create an instance of AuthenticationMethods
  const AuthenticationObject = new AuthenticationMethods();

  if (AuthenticationObject.getToken() !== null) {
    // if checkLogin() = false, the token is not expired
    if (!AuthenticationObject.checkLogin()) {
      // change reducer to display connected navigation bar
      changeIsConnected();
    }
    else {
      AuthenticationObject.deleteToken();
    }
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
  changeIsConnected: PropTypes.func.isRequired,
};

export default App;
