import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import OfferScreen from 'screens/OfferScreen';
// import {fetchItemsRequest} from 'containers/HomeContainer/actions';
import {makeSelectAllOffers} from 'containers/HomeContainer/selectors';

const mapStateToProps = createStructuredSelector({
  allOffers: makeSelectAllOffers(),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(OfferScreen);
