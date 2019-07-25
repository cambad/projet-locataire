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
    const { active, handleClickBtn } = this.props;
    return (
      <nav className={classNames('navbar', { navActive: active })}>
        <ul className="navbar-ul">
          <NavLink to="#"><li onClick={handleClickBtn} className="navbar-ul-link">Liste des appartements</li></NavLink>
          <li onClick={handleClickBtn} className="navbar-ul-link"><a onClick={this.handleOpen} href="#">Se connecter</a></li>
          { isModalOpen === true && <Connection isModalOpen={isModalOpen} handleClose={this.handleClose} /> }
          <NavLink to="/inscription/"><li onClick={handleClickBtn} className="navbar-ul-link">S'inscrire</li></NavLink>
        </ul>
      </nav>
    );
  }
}

Nav.propTypes = {
  active: PropTypes.bool.isRequired,
  handleClickBtn: PropTypes.func.isRequired,
};


export default Nav;
