// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Connection from 'src/components/Connection';

// Action Creators
import { sendConnectForm } from 'src/store/reducer';

const mapStateToProps = state => ({
  firstName: state.reducer.firstName,
  lastName: state.reducer.lastName,
  email: state.reducer.email,
  password: state.reducer.password,
});


const mapDispatchToProps = dispatch => ({
  sendConnectForm: () => {
    dispatch(sendConnectForm());
  },
});

// Container
const ConnectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Connection);

// == Export
export default ConnectionContainer;
