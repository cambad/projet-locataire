// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Header from 'src/components/Header';

// Action Creators
import { isConnectedToFalse, setModalOpen, setModalClose } from 'src/store/reducer';


const mapStateToProps = state => ({
  isModalOpen: state.reducer.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
  isConnectedToFalse: () => {
    dispatch(isConnectedToFalse());
  },
  setModalOpen: () => {
    dispatch(setModalOpen());
  },
  setModalClose: () => {
    dispatch(setModalClose());
  },
});

// Container
const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

// == Export
export default HeaderContainer;
