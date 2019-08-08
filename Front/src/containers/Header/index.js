// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { isConnectedToFalse } from 'src/store/reducer';


const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  isConnectedToFalse: () => {
    dispatch(isConnectedToFalse());
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
