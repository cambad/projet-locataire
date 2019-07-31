// import npm
import React from 'react';
import Rating from '@material-ui/lab/Rating';
import PropTypes from 'prop-types';

// local import

// component
const NotationFormElement = ({
  title,
  name,
  nameValue,
  notation,
  changeStarNumber,
}) => {
  // callBack onChange event
  const onChangeNotation = (event) => {
    // retrieve the number of stars
    let { value } = event.target;
    // change type of value because value is now a string but we expect a number
    value = parseInt(value, 10);
    // retrieve the name of notation to switch dispatch
    const { name: element } = event.target;
    // function that send the action
    changeStarNumber(value, element);
  };

  return (
    <div>
      <label htmlFor={name}>{title}</label>
      <Rating
        name={nameValue}
        value={notation}
        onChange={onChangeNotation}
      />
    </div>
  );
};

NotationFormElement.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  nameValue: PropTypes.string.isRequired,
  notation: PropTypes.number.isRequired,
  changeStarNumber: PropTypes.func.isRequired,
};

// export default
export default NotationFormElement;
