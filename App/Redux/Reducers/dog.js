import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getAllListBreed: null,
  getRandomPic: ['payload'],
  fetchedAllListBreed: ['response'],
  fetchedRandomPic: ['response'],
  requestFailed: ['error']
})

export const dogTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  dogList: [],
  randomPic: {}
})

/* ------------- Reducers ------------- */
const fetchedDogs = (state, action) => ({
  ...state,
  dogList: action.response
})
const fetchedRandomPic = (state, action) => ({
  ...state,
  randomPic: action.response
})

const failedRequest = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_FAILED]: failedRequest,
  [Types.FETCHED_ALL_LIST_BREED]: fetchedDogs,
  [Types.FETCHED_RANDOM_PIC]: fetchedRandomPic
})
