import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';


class MarkerComponent extends React.Component {
  state = {
    isOpen: false,
  }

  handleToggleOpen = (id) => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  }

  render() {
    const { markers } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        {markers.apartments.map(marker => (
          <Marker
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            onClick={() => this.handleToggleOpen(marker.id)}
          >
            {isOpen && (
              <InfoWindow onCloseClick={this.handleToggleClose}>
                <div>
                  <h3 className="infowindow__title">{marker.title}</h3>
                  <span>Learn more</span>
                </div>
              </InfoWindow>
            )}
          </Marker>
        ))}
      </div>
    );
  }
}

export default MarkerComponent;
