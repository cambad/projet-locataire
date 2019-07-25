import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Nav from 'src/components/Nav';

import './header.scss';


const Header = ({
  open,
  setOpen,
  handleOpen,
  handleClose,
}) => (
  <Fragment>
    <header>
      <div className="navbar-title">
        <NavLink to="/"><h4 className="title">SmartRenting</h4></NavLink>
      </div>
      <Nav
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </header>
  </Fragment>
);

Header.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  handleOpen: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Header;
