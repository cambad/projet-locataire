import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import AuthenticationMethods from 'src/components/AuthenticationMethods';
import decode from 'jwt-decode';

import './profil.scss';

class Profil extends React.Component {
  componentDidMount() {
    const authenticationObject = new AuthenticationMethods();
    const token = authenticationObject.getToken();
    const decoded = decode(token);
    const { id } = decoded;

    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    axios.get(`https://api.rate-my-rent.fr/api/${id}/user`)
      .then(response => console.log(response));
  }

  render() {
    return (
      <main className="profil">
        <div className="profil-card">
          <p className="profil-card-edit">Editer profile</p>
          <FaUserAlt className="profil-card-picture" />
          <ul className="profil-card-info">
            <li className="profil-card-info-item">Nom</li>
            <li className="profil-card-info-item">Prénom</li>
            <li className="profil-card-info-item">Adresse e-mail</li>
          </ul>
        </div>
      </main>
    );
  }
}


export default Profil;
