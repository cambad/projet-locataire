// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ApartmentRating from 'src/components/ApartmentRating';

// Action Creators
import { changeIsLocataire, changeIsVisiteur, changeAddressInput } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = state => ({
  address: state.address,
  accesibilityValue: state.accesibilityValue,
  environnementValue: state.environnementValue,
  circulationValue: state.circulationValue,
  exteriorValue: state.exteriorValue,
  interiorValue: state.interiorValue,
  isolationValue: state.isolationValue,
  cleanlinessValue: state.cleanlinessValue,
  lightValue: state.lightValue,
  contactValue: state.contactValue,
  contactQualityValue: state.contactQualityValue,
  recommendationValue: state.recommendationValue,
  isLocataire: state.isLocataire,
  isVisiteur: state.isVisiteur,
  isDisplayed: state.isDisplayed,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = dispatch => ({
  isLocataireChange: () => {
    dispatch(changeIsLocataire());
  },
  isVisiteurChange: () => {
    dispatch(changeIsVisiteur());
  },
  changeAdress: (address) => {
    dispatch(changeAddressInput(address));
  },
});

// Container
const ApartmentRatingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ApartmentRating);

// == Export
export default ApartmentRatingContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Example);
*/
