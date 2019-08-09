import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import Connection from 'src/containers/Connection';

import './nav.scss';

class Nav extends React.Component {
  state = {
    //isModalOpen: false,
  }


  render() {
    const {
      active,
      handleClickBtn,
      isConnected,
      handleOpen,
      handleClose,
      isModalOpen,
    } = this.props;
    return (
      <nav className={classNames('navbar', { navActive: active })}>
        { !isConnected && (
          <ul className="navbar-ul">
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/recherche/">Recherche</NavLink></li>
            {/* If user is not connected, the link "Noter un logement" displays the connexion modal */}

            <li onClick={handleClickBtn} className="navbar-ul-link"><a onClick={handleOpen} href="#">Noter un logement</a></li>
            { isModalOpen === true && <Connection isModalOpen={isModalOpen} handleClose={handleClose} /> }

            <li onClick={handleClickBtn} className="navbar-ul-link"><a onClick={handleOpen} href="#">Se connecter</a></li>
            { isModalOpen === true && <Connection isModalOpen={isModalOpen} handleClose={handleClose} /> }

            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/inscription/">S'inscrire</NavLink></li>
          </ul>
        )}
        { isConnected && (
          <ul className="navbar-ul">
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/recherche/">Recherche</NavLink></li>
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/noter-un-appartement/">Noter un logement</NavLink></li>
            <li onClick={handleClickBtn} className="navbar-ul-link"><NavLink to="/profil/">Profil</NavLink></li>
            <li onClick={handleClickBtn} className="navbar-ul-link"><a id="disconnect" href="#">Se déconnecter</a></li>
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
