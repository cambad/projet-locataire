import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Nav from 'src/components/Nav';

import './header.scss';

class Header extends React.Component {
  //
  state = {
    active: false,
    width: 0,
  }

  componentDidMount() {
    let width = window.innerWidth;
    window.addEventListener('resize', (e) => {
      width = e.target.innerWidth;
      this.setStatewithWidth(width);
    });
    this.setStatewithWidth(width);
  }

  // will update the state if or not screen rotation
  setStatewithWidth = (width) => {
    this.setState({
      width,
    });
  }

  // switch state.active to modifiy classNames
  handleClickBtn = () => {
    const { active, width } = this.state;
    if (width < 991) {
      this.setState({
        active: !active,
      });
    }
  }

  render() {
    const { active } = this.state;
    return (
      <div className="header-block">
        <header className={classNames('header', { headerShadow: !active })}>
          <NavLink to="/" className="header-title">Rate my rent</NavLink>
          <div className="header-btn">
            <div onClick={this.handleClickBtn} className={classNames({ 'header-btn-hamburger': !active, 'header-btn-cross': active })}>
              <div className={classNames('header-btn-hamburger-line', { 'header-btn-cross-line': active })} />
            </div>
          </div>
          <Nav active={active} handleClickBtn={this.handleClickBtn} />
        </header>
      </div>
    );
  }
}

export default Header;
