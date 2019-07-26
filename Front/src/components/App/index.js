import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Research from 'src/components/Research';
import Footer from 'src/components/Footer';
import Register from 'src/components/Register';
import Contact from 'src/components/Contact';
import ResearchMap from 'src/components/ResearchMap';

import './app.scss';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route path="/" exact component={Research} />
      <Route path="/contact" component={Contact} />
      <Route path="/inscription" component={Register} />
      <Route path="/recherche" component={ResearchMap} />
    </Switch>
    <Footer />
  </div>
);


export default App;
