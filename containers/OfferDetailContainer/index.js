import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import OfferDetailScreen from 'screens/OfferDetailScreen';
import {fetchItemsRequest} from './actions';
import {makeSelectAllOffers} from './selectors';

const mapStateToProps = createStructuredSelector({
  allOffers: makeSelectAllOffers(),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(OfferDetailScreen);
