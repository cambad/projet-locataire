import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import AuthenticationMethods from 'src/components/AuthenticationMethods';
import decode from 'jwt-decode';

import './profil.scss';

class Profil extends React.Component {
  state = {
    email: '',
    name: '',
    surname: '',
  }

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
      .then((response) => {
        const { email, name, surname } = response.data[0];
        this.setState({
          email,
          name,
          surname,
        });
      });
  }

  render() {
    const { email, name, surname } = this.state;
    return (
      <main className="profil">
        <div className="profil-card">
          <p className="profil-card-edit">Editer profile</p>
          <FaUserAlt className="profil-card-picture" />
          <ul className="profil-card-info">
            <li className="profil-card-info-item">{name}</li>
            <li className="profil-card-info-item">{surname}</li>
            <li className="profil-card-info-item">{email}</li>
          </ul>
        </div>
      </main>
    );
  }
}


export default Profil;
