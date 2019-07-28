import React from 'react';

import './register.scss';

const Register = () => (
  <div className="photo">
    <div className="register">
      <form className="register-form">
        <h1 className="register-form-title">Inscription</h1>
        <div className="register-form-fields">
          <label htmlFor="firstname">Nom</label>
          <input type="text" placeholder="Votre nom" />
          <label htmlFor="lastname">Prénom</label>
          <input type="text" placeholder="Votre prénom" />
          <label htmlFor="email">Adresse e-mail</label>
          <input type="email" placeholder="Votre adresse e-mail" />
          <label htmlFor="password">Mot de passe</label>
          <input type="password" placeholder="Votre mot de passe" />
          <label htmlFor="password-comfirm">Confirmez</label>
          <input type="password" placeholder="Comfirmez votre mot de passe" />
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

export default Register;
