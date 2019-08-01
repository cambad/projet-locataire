// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Nav from 'src/components/Nav';

// Action Creators

const mapStateToProps = state => ({
  isConnected: state.reducer.isConnected,
});


const mapDispatchToProps = () => ({});

// Container
const NavContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav);

// == Export
export default NavContainer;
