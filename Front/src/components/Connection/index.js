import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import './connection.scss';

const getModalStyle = () => ({
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 500,
    height: 500,
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#223843',
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

const Connection = ({ isModalOpen, handleClose }) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isModalOpen}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 className="connect-title">Connection</h2>
        <form className="connect-form">
          <label className="connect-form-email" htmlFor="mail-adress">Votre adresse e-mail</label>
          <input className="connect-form-email-input" type="text" placeholder="Entrez votre adresse mail" />
          <label className ="connect-form-password" htmlFor="password">Votre mot de passe</label>
          <input className="connect-form-password-input" type="password" placeholder="Entrez votre mot de passe" />
          <button className="connect-form-button" type="submit">Connection</button>
        </form>
      </div>
    </Modal>
  );
};

Connection.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Connection;
