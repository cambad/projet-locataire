import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Nav from 'src/containers/Nav';
import AuthenticationMethods from 'src/components/AuthenticationMethods';
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

  handleOpen = () => {
    const { setModalOpen } = this.props;
    setModalOpen();
  };

  handleClose = () => {
    const { setModalClose } = this.props;
    setModalClose();
  };

  // will update the state if or not screen rotation
  setStatewithWidth = (width) => {
    this.setState({
      width,
    });
  }

  // switch state.active to modifiy classNames
  handleClickBtn = (event) => {
    const { active, width } = this.state;
    if (width < 991) {
      this.setState({
        active: !active,
      });
    }

    // Disconnect here because the click event was already used
    const { id } = event.target;
    if (id === 'disconnect') {
      // create object to delete token
      const authenticationObject = new AuthenticationMethods();
      authenticationObject.deleteToken();
      // isConnected to false
      const { isConnectedToFalse, setModalClose } = this.props;
      isConnectedToFalse();
      setModalClose();
      // redirect to landing page
      // return <Redirect to="/" />;
    }
  }

  render() {
    const { active } = this.state;
    const { isModalOpen } = this.props;
    return (
      <div className="header-block">
        <header className={classNames('mainheader', { headerShadow: !active })}>
          <NavLink to="/" className="mainheader-title">Rate my rent</NavLink>
          <div className="mainheader-btn">
            <div onClick={this.handleClickBtn} className={classNames({ 'mainheader-btn-hamburger': !active, 'mainheader-btn-cross': active })}>
              <div className={classNames('mainheader-btn-hamburger-line', { 'mainheader-btn-cross-line': active })} />
            </div>
          </div>
          <Nav
            active={active}
            handleClickBtn={this.handleClickBtn}
            isModalOpen={isModalOpen}
            handleOpen={this.handleOpen}
            handleClose={this.handleClose}
          />
        </header>
      </div>
    );
  }
}

// props validation
Header.propTypes = {
  isConnectedToFalse: PropTypes.func.isRequired,
};

export default Header;
