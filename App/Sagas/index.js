/*
    Index of Saga
*/
import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { dogTypes } from '../Redux/Reducers/dog'

import { StartupTypes } from '../Redux/StartupRedux'

import { authTypes } from '../Redux/Reducers/auth'

/* ------------- Sagas ------------- */

import {
  startup
} from './mainsaga'

import {
  getAllListBreed,
  getRandomPic
} from './dogSaga'

import {
  login
} from './authSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function * root () {
  yield [
    // some sagas only receive an action
    // Main Authentication
    takeLatest(StartupTypes.STARTUP, startup),
    // Authentication Sagas
    takeLatest(authTypes.LOGIN, login),
    // dog sagas
    takeLatest(dogTypes.GET_ALL_LIST_BREED, getAllListBreed),
    takeLatest(dogTypes.GET_RANDOM_PIC, getRandomPic)
  ]
}
