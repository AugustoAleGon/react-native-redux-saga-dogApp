/*
    Index of Saga
*/
import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { dogTypes } from '../Redux/Reducers/dog'

/* ------------- Sagas ------------- */

import {
  getAllListBreed,
  getRandomPic
} from './dogSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function * root () {
  yield [
    // some sagas only receive an action
    // dog sagas
    takeLatest(dogTypes.GET_ALL_LIST_BREED, getAllListBreed),
    takeLatest(dogTypes.GET_RANDOM_PIC, getRandomPic)
  ]
}
