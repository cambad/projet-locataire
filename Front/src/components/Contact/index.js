import React from 'react';

import './contact.scss';

const Contact = () => (
  <div className="photo-contact">
    <div className="contact">
      <form className="contact-form">
        <h1 className="contact-form-title">Contactez nous</h1>
        <div className="contact-form-fields">
          <label htmlFor="firstname">Nom</label>
          <input type="text" placeholder="Votre nom" />
          <label htmlFor="lastname">Prénom</label>
          <input type="text" placeholder="Votre prénom" />
          <label htmlFor="email">Adresse mail</label>
          <input type="email" placeholder="Votre adresse mail" />
          <label htmlFor="password">Votre message</label>
          <textarea type="text" placeholder="Votre message" />
        </div>
        <div className="contact-form-button">
          <button className="contact-form-button" type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  </div>
);

export default Contact;
