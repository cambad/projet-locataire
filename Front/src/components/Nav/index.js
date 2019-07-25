import React from 'react';
import { NavLink } from 'react-router-dom';

import Connection from 'src/components/Connection';

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
    return (
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-link"><NavLink to="#">Appartements</NavLink></li>
          <li className="navbar-link"><a onClick={this.handleOpen} href="#">Se connecter</a></li>
          { isModalOpen === true && <Connection isModalOpen={isModalOpen} handleClose={this.handleClose} /> }
          <li className="navbar-link"><NavLink to="/inscription/">S'inscrire</NavLink></li>
        </ul>
      </nav>
    );
  }
}


export default Nav;
