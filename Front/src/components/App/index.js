import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from 'src/components/Header';
import Research from 'src/components/Research';
import Footer from 'src/components/Footer';
import Register from 'src/components/Register';
import Connection from 'src/components/Connection';

import './app.scss';

const App = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Header
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Switch>
        <Route path="/" exact component={Research} />
        <Route path="/connection" component={Connection} />
        <Route path="/inscription" component={Register} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
