// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import Research from 'src/components/Research';

// Action Creators
import { changeAddressInput } from 'src/store/reducer';

const mapStateToProps = state => ({
  address: state.address,
});


const mapDispatchToProps = dispatch => ({
  changeAdress: (address) => {
    dispatch(changeAddressInput(address));
  },
});

// Container
const ResearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Research);

// == Export
export default ResearchContainer;
