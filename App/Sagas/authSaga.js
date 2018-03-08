// Navigation actions
// import { NavigationActions } from 'react-navigation'

import {put} from 'redux-saga/effects'
// Here we should import services if we have a custom api

// In our case we just have a reducer

import authAction from '../Redux/Reducers/auth'

export function * login (action) {
  const { signInSuccess } = authAction
  yield put(signInSuccess())
  // const resetAction = NavigationActions.reset({
  //   index: 0,
  //   actions: [
  //     NavigationActions.navigate({routeName: 'HomeScreen'})
  //   ],
  //   key: null
  // })
}
