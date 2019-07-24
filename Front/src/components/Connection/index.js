import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
    outline: 'none',
  },
}));

const Connection = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div className={classes.paper}>
          <h2 id="modal-title">Connection</h2>
          <p id="simple-modal-description">
            <form>
              <label htmlFor="mail-adress">Votre adresse e-mail</label>
              <input type="text" placeholder="Entrez votre adresse mail" />
              <label htmlFor="password">Votre mot de passe</label>
              <input type="password" placeholder="Entrez votre mot de passe" />
            </form>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Connection;
