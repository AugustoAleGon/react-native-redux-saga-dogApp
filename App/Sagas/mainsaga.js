import { select, put } from 'redux-saga/effects'
import { NavigationActions } from 'react-navigation'
// import { login } from './authsaga'

// process STARTUP actions
export function * startup () {
  const loginInfo = yield select((state) => state.auth.logged)
  if (loginInfo) {
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({routeName: 'Home'})
      ],
      key: null
    })
    yield put(resetAction)
  }
}
