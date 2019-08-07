// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Register from 'src/components/Register';

// Action Creators
import {
  sendRegisterForm,
  changeFirstName,
  changeLastName,
  changeEmail,
  changePassword,
} from 'src/store/reducer';

const mapStateToProps = state => ({
  firstName: state.reducer.firstName,
  lastName: state.reducer.lastName,
  email: state.reducer.email,
  password: state.reducer.password,
});


const mapDispatchToProps = dispatch => ({
  sendRegisterForm: () => {
    dispatch(sendRegisterForm());
  },
  changeFirstName: (value) => {
    dispatch(changeFirstName(value));
  },
  changeLastName: (value) => {
    dispatch(changeLastName(value));
  },
  changeEmail: (value) => {
    dispatch(changeEmail(value));
  },
  changePassword: (value) => {
    dispatch(changePassword(value));
  },
});

// Container
const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

// == Export
export default RegisterContainer;
