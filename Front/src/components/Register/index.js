import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';

import './register.scss';

const Register = ({
  firstName,
  lastName,
  email,
  password,
  sendRegisterForm,
  changeFirstName,
  changeLastName,
  changeEmail,
  changePassword,
  landingPage,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRegisterForm();
  };

  const handleFirstname = (event) => {
    const { value } = event.target;
    changeFirstName(value);
  };

  const handleLastname = (event) => {
    const { value } = event.target;
    changeLastName(value);
  };

  const handleEmail = (event) => {
    const { value } = event.target;
    changeEmail(value);
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    changePassword(value);
  };

  if (landingPage) {
    return <Redirect to="/" />;
  }

  return (
    <div className="photo">
      <div className="register">
        <form onSubmit={handleSubmit} className="register-form">
          <h1 className="register-form-title">Inscription</h1>
          <div className="register-form-fields">
            <label htmlFor="firstname">Nom</label>
            <input value={firstName} onChange={handleFirstname} type="text" placeholder="Votre nom" />
            <label htmlFor="lastname">Prénom</label>
            <input value={lastName} onChange={handleLastname} type="text" placeholder="Votre prénom" />
            <label htmlFor="email">Adresse e-mail</label>
            <input value={email} onChange={handleEmail} type="email" placeholder="Votre adresse e-mail" />
            <label htmlFor="password">Mot de passe</label>
            <input value={password} onChange={handlePassword} type="password" placeholder="Votre mot de passe" autoComplete="false" />
          </div>
          <div className="register-form-cgu">
            <input type="checkbox" value="1" id="checkboxFiveInput" name="" />
            <label htmlFor="checkboxFiveInput">J'accepte les conditions d'utilisation du site</label>
          </div>
          <div className="register-form-button">
            <button className="register-form-button" type="submit">Inscription</button>
          </div>
        </form>
      </div>
    </div>
  );
};

Register.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  sendRegisterForm: PropTypes.func.isRequired,
  changeFirstName: PropTypes.func.isRequired,
  changeLastName: PropTypes.func.isRequired,
  changeEmail: PropTypes.func.isRequired,
  changePassword: PropTypes.func.isRequired,
  landingPage: PropTypes.bool.isRequired,
};

export default Register;
