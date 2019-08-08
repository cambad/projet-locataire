// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Connection from 'src/components/Connection';

// Action Creators
import { sendConnectForm, changePassword, changeEmail } from 'src/store/reducer';

const mapStateToProps = state => ({
  email: state.reducer.email,
  password: state.reducer.password,
});


const mapDispatchToProps = dispatch => ({
  sendConnectForm: () => {
    dispatch(sendConnectForm());
  },
  changePassword: (value) => {
    dispatch(changePassword(value));
  },
  changeEmail: (value) => {
    dispatch(changeEmail(value));
  },
});

// Container
const ConnectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Connection);

// == Export
export default ConnectionContainer;
