// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { deleteToken } from 'src/store/reducer';


const mapStateToProps = state => ({
  token: state.reducer.token,
});


const mapDispatchToProps = dispatch => ({
  deleteToken: () => {
    dispatch(deleteToken());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
