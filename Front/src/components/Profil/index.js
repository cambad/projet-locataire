// npm import
import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import Review from 'src/components/Review';
import { NavLink } from 'react-router-dom';

// local import
import AuthenticationMethods from 'src/components/AuthenticationMethods';
import decode from 'jwt-decode';

import './profil.scss';

class Profil extends React.Component {
  state = {
    email: '',
    name: '',
    surname: '',
    loader: false,
    reviews: [],
    noReview: false,
  }

  componentDidMount() {
    const authenticationObject = new AuthenticationMethods();
    const token = authenticationObject.getToken();
    const decoded = decode(token);
    const { id } = decoded;

    // prepare request with token header
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    // get user information
    axios.get(`https://api.rate-my-rent.fr/api/${id}/user`)
      .then((response) => {
        // console.log(response)
        const { email, name, surname } = response.data[0];
        this.setState({
          email,
          name,
          surname,
        });
      });
    
    // get reviews
    this.setState({
        loader: true,
    });
    // get reviews of the user
    axios.get(`https://api.rate-my-rent.fr/api/${id}/user/reviews`)
      .then((response) => {
        this.setState({
            loader: false,
        });
        // get data
        const { data } = response;
        if (data.length !== 0) {
            this.setState({
                reviews: data,
            });
        }
        else {
            this.setState({
                noReview: true,
            });
        }
      });
  }

  render() {
    const {
        email,
        name,
        surname,
        loader,
        reviews,
        noReview,
    } = this.state;
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
        <div className="section">
            <h3 className="section-title">Tous mes avis postés</h3>
            {loader && (
            <div className="loader">
                <CircularProgress disableShrink />
            </div>
            )}
            {reviews.length > 0 &&
                reviews.map((currentReview) => {
                    return (
                        <NavLink key={currentReview.id} to={`/appartement/${currentReview.id}`}><Review className="section-reviews" {...currentReview} /></NavLink>
                    );
                })
            }
            {noReview && (
                <p className="noReview">Vous n'avez pas encore posté d'avis</p>
            )}
        </div>
        

      </main>
    );
  }
}


export default Profil;
