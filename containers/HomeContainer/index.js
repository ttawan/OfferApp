import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import HomeScreen from 'screens/HomeScreen';
import {fetchItemsRequest} from './actions';
import {makeSelectAllOffers, makeSelectFetchingStatus} from './selectors';

const mapStateToProps = createStructuredSelector({
  allOffers: makeSelectAllOffers(),
  isFetching: makeSelectFetchingStatus(),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchItemsRequest()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomeScreen);
