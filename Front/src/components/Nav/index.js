import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Connection from 'src/components/Connection';

import './nav.scss';

class Nav extends React.Component {
  state = {
    isModalOpen: false,
  }

  handleOpen = () => (
    this.setState({
      isModalOpen: true,
    })
  );

  handleClose = () => (
    this.setState({
      isModalOpen: false,
    })
  )

  render() {
    const { isModalOpen } = this.state;
    const {
      active,
      handleClickBtn,
      isConnected,
    } = this.props;
    return (
      <nav className={classNames('navbar', { navActive: active })}>
        { !isConnected && (
          <ul className="navbar-ul">
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/recherche/">Recherche</NavLink></li>
            {/* If user is not connected, the link "Noter un logement" displays the connexion modal */}
            <li onClick={handleClickBtn} className="navbar-ul-link"><a onClick={this.handleOpen} href="#">Noter un logement</a></li>
            { isModalOpen === true && <Connection isModalOpen={isModalOpen} handleClose={this.handleClose} /> }
            <li onClick={handleClickBtn} className="navbar-ul-link"><a onClick={this.handleOpen} href="#">Se connecter</a></li>
            { isModalOpen === true && <Connection isModalOpen={isModalOpen} handleClose={this.handleClose} /> }
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/inscription/">S'inscrire</NavLink></li>
          </ul>
        )}
        { isConnected && (
          <ul className="navbar-ul">
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/recherche/">Recherche</NavLink></li>
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/noter-un-appartement/">Noter un logement</NavLink></li>
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/profil/">Profil</NavLink> </li>
          </ul>
        )}
      </nav>
    );
  }
}

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  isConnected: PropTypes.bool.isRequired,
  handleClickBtn: PropTypes.func.isRequired,
};


export default Nav;
