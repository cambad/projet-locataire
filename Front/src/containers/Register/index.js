// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Register from 'src/components/Register';

// Action Creators
import { sendRegisterForm } from 'src/store/reducer';

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
});

// Container
const RegisterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);

// == Export
export default RegisterContainer;
