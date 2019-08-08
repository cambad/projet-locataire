// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import App from 'src/components/App';

// Action Creators
import { changeIsConnected } from 'src/store/reducer';


const mapStateToProps = state => ({
  // isConnected: state.reducer.isConnected,
});


const mapDispatchToProps = dispatch => ({
  // deleteToken: () => {
  //   dispatch(deleteToken());
  // },
  changeIsConnected: () => {
    dispatch(changeIsConnected());
  },
});

// Container
const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

// == Export
export default AppContainer;
