import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Nav from 'src/components/Nav';

import './header.scss';

class Header extends React.Component {
  //
  state = {
    active: false,
  }

  // switch state.active to modifiy classNames
  handleClickBtn = () => {
    const { active } = this.state;
    this.setState({
      active: !active,
    });
  }

  render() {
    const { active } = this.state;
    return (
      <header className="header">
        <NavLink to="/" className="header-title">Rate my rent</NavLink>
        <div className="header-btn">
          <div onClick={this.handleClickBtn} className={classNames({ 'header-btn-hamburger': !active, 'header-btn-cross': active })}>
            <div className={classNames('header-btn-hamburger-line', { 'header-btn-cross-line': active })} />
          </div>
        </div>
        <Nav active={active} handleClickBtn={this.handleClickBtn} />
      </header>
    );
  }
}

export default Header;
