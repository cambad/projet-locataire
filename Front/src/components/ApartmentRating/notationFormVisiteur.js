import React from 'react';
import PropTypes from 'prop-types';

// data
import formVisitor from 'src/data/formVisitor';

// local import
import './apartmentRating.scss';
import NotationFormElement from './NotationFormElement';

const NotationFormVisiteur = ({
  visitorValue,
  changeStarNumber,
}) => {
  const { visitorForm } = formVisitor;
  return (
    <>
      <h1 className="notation">Notation de l'appartement</h1>
      <div className="quartier">
        {visitorForm.map((element) => {
          const { id } = element;
          // send the good notation to the good component
          const notation = visitorValue[element.nameValue];
          return (
            <NotationFormElement
              key={id}
              notation={notation}
              {...element}
              changeStarNumber={changeStarNumber}
            />
          );
        })}
      </div>
    </>
  );
};

// Proptypes validation
NotationFormVisiteur.propTypes = {
  visitorValue: PropTypes.object.isRequired,
  changeStarNumber: PropTypes.func.isRequired,
};

export default NotationFormVisiteur;
