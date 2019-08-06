import React from 'react';
import Rating from '@material-ui/lab/Rating';
import { TiPlusOutline, TiMinusOutline } from 'react-icons/ti';
import { Accordion, Icon } from 'semantic-ui-react';
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
    stillIn: '',
    district: 0,
    exterior: 0,
    interior: 0,
    contact: 0,
    rooms: 0,
    location: '',
    floorNumber: 0,
    accessibility: 0,
    apartmentEnvironment: 0,
    brightness: 0,
    buildingEnvironment: 0,
    cleanliness: 0,
    contactQuality: 0,
    exteriorBuilding: 0,
    firstContact: 0,
    insulation: 0,
    traffic: 0,
    activeIndex: -1,
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`https://api.rate-my-rent.fr/api/${params.id}/apartment`)
      .then((results) => {
        console.log(results); 
        const { data } = results;
        const { reviews } = results.data[0];
        const { marks } = results.data[0].reviews[0];
        this.setState({
          address: data[0].address,
          rental: data[0].rental,
          area: data[0].area,
          floorNumber: data[0].floor_number,
          location: data[0].location,
          rooms: data[0].rooms,
          title: reviews[0].title,
          stillIn: reviews[0].still_in,
          positive: reviews[0].positive,
          negative: reviews[0].negative,
          district: marks[0].recommendation,
          exterior: marks[0].exterior,
          interior: marks[0].interior,
          contact: marks[0].contact,
          accessibility: marks[0].accessibility,
          apartmentEnvironment: marks[0].apartmentEnvironment,
          brightness: marks[0].brightness,
          buildingEnvironment: marks[0].buildingEnvironment,
          cleanliness: marks[0].cleanliness,
          contactQuality: marks[0].contactQuality,
          exteriorBuilding: marks[0].exteriorBuilding,
          firstContact: marks[0].firstContact,
          insulation: marks[0].insulation,
          traffic: marks[0].traffic,
        });
      })
      .catch(error => console.log(error));
  }

  handleClick = (titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({
      activeIndex: newIndex,
    });
  }

  render() {
    const {
      address,
      rental,
      area,
      title,
      positive,
      negative,
      stillIn,
      district,
      exterior,
      interior,
      contact,
      rooms,
      location,
      floorNumber,
      activeIndex,
      accessibility,
      apartmentEnvironment,
      brightness,
      buildingEnvironment,
      cleanliness,
      contactQuality,
      exteriorBuilding,
      firstContact,
      insulation,
      traffic,
    } = this.state;

    const overallAverage = (district + exterior + interior + contact) / 4;
    return (
      <>
        <main className="main-apartment">
          <div className="info">
            <div className="generales">
              <h1 className="generales-title">{title}</h1>
              <h3 className="generales-address">{address}</h3>
              <div className="generales-notation">
                <h3 className="generales-title">Note générale</h3>
                <Rating
                  name="simple-controlled"
                  max={5}
                  value={overallAverage}
                  readOnly
                />
              </div>
            </div>
            <div className="caract">
              <h3 className="caract-item">Loyer : {rental}€</h3>
              <h3 className="caract-item">Surface au sol (en m²) : {area}</h3>
              <h3 className="caract-item">Etage : {floorNumber}</h3>
              <h3 className="caract-item">Localisation : {location}</h3>
              <h3 className="caract-item">Nombre de pièces : {rooms}</h3>
              <h3 className="caract-item">Habite toujours dans l'appartement : { stillIn ? 'Oui' : 'Non' }</h3>
            </div>
            <article className="notation">
              <h2 className="notation-title">{title}</h2>
              <div className="notation-img">
                <div className="img" />
              </div>
              <div className="notation-review">
                <div className="notation-review-item">
                  <Accordion fluid>
                    <Accordion.Title
                      active={activeIndex === 0}
                      index={0}
                      onClick={this.handleClick}
                      className="accordion-title"
                    >
                      <div>
                        <Icon name="dropdown" />
                        Quartier
                      </div>
                      <Rating
                        name="simple-controlled"
                        max={5}
                        value={district}
                        readOnly
                      />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 0}>
                      <div className="accordion-content">
                        <h3>Accessibilité de l'appartement</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={accessibility}
                          readOnly
                        />
                      </div>
                      <div className="accordion-content">
                        <h3>Environnement urbain de l'appartement</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={apartmentEnvironment}
                          readOnly
                        />
                      </div>
                      <div className="accordion-content">
                        <h3>Circulation</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={traffic}
                          readOnly
                        />
                      </div>
                    </Accordion.Content>
                  </Accordion>
                </div>
                <div className="notation-review-item">
                  <Accordion fluid>
                    <Accordion.Title
                      active={activeIndex === 1}
                      index={1}
                      onClick={this.handleClick}
                      className="accordion-title"
                    >
                      <div>
                        <Icon name="dropdown" />
                        Etat général de l'immeuble
                      </div>
                      <Rating
                        name="simple-controlled"
                        max={5}
                        value={exterior}
                        readOnly
                      />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 1}>
                      <div className="accordion-content">
                        <h3>État extérieur de l'immeuble</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={exteriorBuilding}
                          readOnly
                        />
                      </div>
                      <div className="accordion-content">
                        <h3>Etat des parties communes</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={buildingEnvironment}
                          readOnly
                        />
                      </div>
                    </Accordion.Content>
                  </Accordion>
                </div>
                <div className="notation-review-item">
                  <Accordion fluid>
                    <Accordion.Title
                      active={activeIndex === 2}
                      index={2}
                      onClick={this.handleClick}
                      className="accordion-title"
                    >
                      <div>
                        <Icon name="dropdown" />
                        Qualité de l'appartement
                      </div>
                      <Rating
                        name="simple-controlled"
                        max={5}
                        value={interior}
                        readOnly
                      />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 2}>
                      <div className="accordion-content">
                        <h3>Isolation thermique et sonore</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={insulation}
                          readOnly
                        />
                      </div>
                      <div className="accordion-content">
                        <h3>Propreté générale</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={cleanliness}
                          readOnly
                        />
                      </div>
                      <div className="accordion-content">
                        <h3>Luminosité</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={brightness}
                          readOnly
                        />
                      </div>
                    </Accordion.Content>
                  </Accordion>
                </div>
                <div className="notation-review-item">
                  <Accordion fluid>
                    <Accordion.Title
                      active={activeIndex === 3}
                      index={3}
                      onClick={this.handleClick}
                      className="accordion-title"
                    >
                      <div>
                        <Icon name="dropdown" />
                        Relation au propriétaire et/ou à l'agence
                      </div>
                      <Rating
                        name="simple-controlled"
                        max={5}
                        value={contact}
                        readOnly
                      />
                    </Accordion.Title>
                    <Accordion.Content active={activeIndex === 3}>
                      <div className="accordion-content">
                        <h3>Prise de contact agent/propriétaire</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={firstContact}
                          readOnly
                        />
                      </div>
                      <div className="accordion-content">
                        <h3>Qualité de la relation lors de la location</h3>
                        <Rating
                          name="simple-controlled"
                          max={5}
                          value={contactQuality}
                          readOnly
                        />
                      </div>
                    </Accordion.Content>
                  </Accordion>
                </div>
              </div>
              <div className="notation-comments">
                <TiPlusOutline className="icon-plus" /><p className="notation-comments-text">{positive}</p>
                <TiMinusOutline className="icon-minus" /><p className="notation-comments-text">{negative}</p>
              </div>
            </article>
          </div>
        </main>
      </>
    );
  }
}

export default Apartment;
