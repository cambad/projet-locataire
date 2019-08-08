import React from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { NavLink } from 'react-router-dom';

// locals imports
import './research.scss';
import Review from 'src/components/Review';

// component
class LastFiveReview extends React.Component {

  state = {
    loader: true,
    dataReception: true,
    lastFiveApartment: [],
  }

  // upload last five apartments
  componentDidMount() {
    axios.get('https://api.rate-my-rent.fr/api/five_apartments')
      .then((response) => {
        // set the local state with data
        this.setState({
          lastFiveApartment: response.data,
          dataReception: true,
          loader: false,
        });
      })
      .catch(() => {
        // change dataReception to False to display a message
        // if an error occurs from XHR request
        this.setState({
          dataReception: false,
          loader: false,
        });
      });
  }

  render() {
    const { lastFiveApartment, dataReception, loader } = this.state;
    console.log(lastFiveApartment);
    return (
      <section className="section">
        <h3 className="section-title">Derniers logements ayant eu un avis</h3>
        {/* If loader, display a circle loader */}
        {loader && (
          <div className="loader">
            <CircularProgress disableShrink />
          </div>
        )}
        {/* if dataReception, display Review */}
        {dataReception && (
          lastFiveApartment.map(appartment => (
            <NavLink key={appartment.id} to={`/appartement/${appartment.id}`}><Review className="section-reviews" {...appartment} /></NavLink>
          ))
        )}
        {!dataReception && (
          <div className="lastFiveApartments-error">
            <p>Il n'y a aucune notation à afficher pour le moment.</p>
          </div>
        )}
      </section>
    );
  }
}

// export default
export default LastFiveReview;
