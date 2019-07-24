import React from 'react';

import Header from 'src/components/Header';
import Research from 'src/components/Research';
import Footer from 'src/components/Footer';

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
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
      <Research />
      <Footer />
    </div>
  );
};

export default App;
