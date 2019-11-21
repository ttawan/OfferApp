import {all} from 'redux-saga/effects';
import homeSaga from 'containers/HomeContainer/saga';

export default function* root() {
  yield all([homeSaga()]);
}
