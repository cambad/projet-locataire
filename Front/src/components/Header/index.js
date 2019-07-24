import React, { Fragment } from 'react';

import './header.scss';

const Header = () => (
  <Fragment>
    <header>
      <div className="navbar-title">
        <h4 className="title">SmartRenting</h4>
      </div>
      <nav className="navbar">
        <ul className="navbar-ul">
          <li className="navbar-link"><a href="#">Appartements</a></li>
          <li className="navbar-link"><a href="#">Se connecter</a></li>
          <li className="navbar-link"><a href="#">S'inscrire</a></li>
        </ul>
      </nav>
    </header>
  </Fragment>
);

export default Header;
