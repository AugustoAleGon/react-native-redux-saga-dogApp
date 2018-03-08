import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  // Here it goes usually handle of request api
  // Have a token if response was Ok
  login: null,
  signInSuccess: null
  // logOut: null
})

export const authTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  logged: false
})

/* ------------- Reducers ------------- */

const signInSuccess = (state, action) => ({
  ...state,
  logged: true
})

// Function that is used when user is gonna log out.
// const logOut = (state, action) => ({
//   ...INITIAL_STATE
// })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: signInSuccess
  // [Types.LOG_OUT]: logOut
})
