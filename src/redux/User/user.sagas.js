import { takeLatest, call, all, put } from 'redux-saga/effects';
import  userTypes from './user.types';
import {signInSuccess} from './user.actions';

export function* emailSignIn({ payload: { email, password }}){

}

export function* onEmailSignInStart() {
    yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export default function* userSagas() {
    yield all([call(onEmailSignInStart)])
}