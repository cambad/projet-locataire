import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';

import './connection.scss';


const Connection = ({
  isModalOpen,
  handleClose,
  sendConnectForm,
  email,
  password,
  changePassword,
  changeEmail,
  connectionError,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // to close the modal connection on submit form
    // handleClose();
    sendConnectForm();
  };

  const handleEmail = (event) => {
    const { value } = event.target;
    // change type of value because value is now a string but we expect a number
    if (value !== '') {
      changeEmail(value);
    }
    changeEmail(value);
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    // change type of value because value is now a string but we expect a number
    if (value !== '') {
      changePassword(value);
    }
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isModalOpen}
      onClose={handleClose}
    >
      <div className="modalContainer">
        <h2 className="connect-title">Connection</h2>
        <form onSubmit={handleSubmit} className="connect-form">
          <label className="connect-form-email" htmlFor="mail-adress">Votre adresse e-mail</label>
          <input onChange={handleEmail} value={email} className="connect-form-email-input" type="text" placeholder="Entrez votre adresse e-mail" autoComplete="off" />
          <label value={password} className ="connect-form-password" htmlFor="password">Votre mot de passe</label>
          <input onChange={handlePassword} className="connect-form-password-input" type="password" placeholder="Entrez votre mot de passe" autoComplete="off" />
          {connectionError && (
            <p className="error-credentials">Nom d'utilisateur ou mot de passe invalide</p>
          )}
          <button className="connect-form-button" type="submit">Connexion</button>
          <p className="connect-form-register">Vous n'êtes pas encore inscrit ?</p>
          <NavLink onClick={handleClose} className="connect-form-register-button" to="/inscription">Inscrivez-vous !</NavLink>
        </form>
      </div>
    </Modal>
  );
};

Connection.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  sendConnectForm: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changePassword: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  connectionError: PropTypes.bool.isRequired,
};

export default Connection;
