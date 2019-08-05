import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Research from 'src/containers/Research';
import Footer from 'src/components/Footer';
import Register from 'src/components/Register';
import Contact from 'src/components/Contact';
import ResearchMap from 'src/containers/ResearchMap';
import Profil from 'src/components/Profil';
import Apartment from 'src/components/Apartment';
import AppartmentRating from 'src/containers/ApartmentRating';

import './app.scss';

const App = () => (
  <React.Fragment>
    <Header />
    <Switch>
      <Route path="/" exact component={Research} />
      <Route path="/contact" component={Contact} />
      <Route path="/inscription" component={Register} />
      <Route path="/recherche" component={ResearchMap} />
      <Route path="/profil" component={Profil} />
      <Route path="/noter-un-appartement" component={AppartmentRating} />
      <Route path="/appartement/:id" component={Apartment} />
    </Switch>
    <Footer />
  </React.Fragment>
);


export default App;
