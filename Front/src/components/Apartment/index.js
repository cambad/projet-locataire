import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import axios from 'axios';

import './apartment.scss';

class Apartment extends React.Component {
  state = {
    address: '',
    rental: 0,
    area: 0,
    title: '',
    positive: '',
    negative: '',
    still_in: '',
  }

  componentWillMount() {
    const { match: { params } } = this.props;
    axios.get(`https://api.rate-my-rent.fr/api/${params.id}/apartment`)
      .then((results) => {
        console.log(results);
        const { apartment } = results.data;
        const { reviews } = results.data.apartment;
        this.setState({
          address: apartment.address,
          rental: apartment.rental,
          area: apartment.area,
          title: reviews[0].title,
          positive: reviews[0].positive,
          negative: reviews[0].negative,
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const {
      address,
      rental,
      area,
      title,
      positive,
      negative,
      still_in,
    } = this.state;
    return (
      <main className="main">
        <div className="info">
          <div className="generales">
            <h3 className="generales-address">{address}</h3>
            <div className="generales-notation">
              <h3 className="generales-title">Note générale</h3>
              <Rating
                name="simple-controlled"
                max={5}
                value={3}
                readOnly
              />
            </div>
          </div>
          <div className="caract">
            <h3 className="caract-item">Loyer : {rental}€</h3>
            <h3 className="caract-item">Surface au sol (en m²) : {area}</h3>
            <h3 className="caract-item">Habite toujours dans l'appartement : {still_in}</h3>
          </div>
          <article className="notation">
            <h2 className="notation-title">{title}</h2>
            <div className="notation-img">
              <div className="img" />
            </div>
            <div className="notation-review">
              <div className="notation-review-item">
                <h3>Quartier</h3>
                <Rating
                  name="simple-controlled"
                  max={5}
                  value={3}
                  readOnly
                />
              </div>
              <div className="notation-review-item">
                <h3>Etat général de l'immeuble</h3>
                <Rating
                  name="simple-controlled"
                  max={5}
                  value={3}
                  readOnly
                />
              </div>
              <div className="notation-review-item">
                <h3>Qualité de l'appartement</h3>
                <Rating
                  name="simple-controlled"
                  max={5}
                  value={3}
                  readOnly
                />
              </div>
              <div className="notation-review-item">
                <h3>Relation au propriétaire et/ou à l'agence</h3>
                <Rating
                  name="simple-controlled"
                  max={5}
                  value={3}
                  readOnly
                />
              </div>
            </div>
            <div className="notation-comments">
              <TiPlusOutline className="icon-plus" /><p className="notation-comments-text">{positive}</p>
              <TiMinusOutline className="icon-minus" /><p className="notation-comments-text">{negative}</p>
            </div>
          </article>
        </div>
      </main>
    );
  }
}

export default Apartment;
