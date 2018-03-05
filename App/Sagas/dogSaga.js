import { call, put } from 'redux-saga/effects'
import {
  getAllListBreed as getAllListBreedRequest,
  getRandomPic as getRandomPicRequest
} from '../../Services'
import dogActions from '../Redux/Reducers/dog'

export function * getAllListBreed (action) {
  const { fetchedAllListBreed, requestFailed } = dogActions
  const responseList = yield call(getAllListBreedRequest, {})
  if (responseList.ok) {
    const { data } = responseList
    yield put(fetchedAllListBreed({dogList: data.message}))
  } else {
    yield put(requestFailed(responseList.error))
  }
}

export function * getRandomPic (action) {
  const { fetchedRandomPic, requestFailed } = dogActions
  const responsePic = yield call(getRandomPicRequest, {})
  if (responsePic.ok) {
    const { data } = responsePic
    yield put(fetchedRandomPic({randomPic: data.message}))
  } else {
    yield put(requestFailed(responsePic.error))
  }
}
