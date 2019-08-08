import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
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
    height: 600,
    border: 'none',
    borderRadius: '25px',
    backgroundColor: '#223843',
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

const Connection = ({
  isModalOpen,
  handleClose,
  sendConnectForm,
  email,
  password,
  changePassword,
  changeEmail,
  isConnected,
}) => {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  const handleSubmit = (e) => {
    e.preventDefault();
    // to close the modal connection on submit form
    handleClose();
    sendConnectForm();
  };

  const handleEmail = (event) => {
    const { value } = event.target;
    // change type of value because value is now a string but we expect a number
    if (value !== '') {
      changeEmail(value);
    }
    changeEmail(value);
  };

  const handlePassword = (event) => {
    const { value } = event.target;
    // change type of value because value is now a string but we expect a number
    if (value !== '') {
      changePassword(value);
    }
  };

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={isModalOpen}
      onClose={handleClose}
    >
      <div style={modalStyle} className={classes.paper}>
        <h2 className="connect-title">Connection</h2>
        <form onSubmit={handleSubmit} className="connect-form">

          <label className="connect-form-email" htmlFor="mail-adress">Votre adresse e-mail</label>
          <input onChange={handleEmail} value={email} className="connect-form-email-input" type="text" placeholder="Entrez votre adresse mail" autoComplete="off" />
          <label value={password} className ="connect-form-password" htmlFor="password">Votre mot de passe</label>

          <input onChange={handlePassword} className="connect-form-password-input" type="password" placeholder="Entrez votre mot de passe" autoComplete="off" />
          <button className="connect-form-button" type="submit">Connection</button>
          <p className="connect-form-register">Vous n'êtes pas encore inscrit ?</p>
          <button className="connect-form-button" type="button"><NavLink onClick={handleClose} to="/inscription">Insrivez vous !</NavLink></button>
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
