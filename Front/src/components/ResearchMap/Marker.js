import React from 'react';
import './marker.scss';

const Marker = ({ title, color }) => (
  <div>
    <div
      className="pin bounce"
      style={{ backgroundColor: color, cursor: 'pointer' }}
      title={title}
    />
    <div className="pulse" />
  </div>
);

export default Marker;
