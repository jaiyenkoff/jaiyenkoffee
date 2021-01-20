import { all, call } from 'redux-saga/effects';

import userSagas from './User/user.sagas';
import productsSaga from './Products/products.sagas.js';

export default function* rootSaga() { 
    yield all([
        call(userSagas),
        call(productsSaga)
     ])
}