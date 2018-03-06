import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
// import { reducer as formReducer } from 'redux-form'
import { resettableReducer } from 'reduxsauce'
import {reducer as dog} from './Reducers/dog'
import { persistReducer } from 'redux-persist'
import AsyncStorage from 'redux-persist/lib/storage'

export default () => {
  const rootConfig = {
    key: 'root',
    storage: AsyncStorage
    // blacklist: [], reducer keys that you do NOT want stored to persistence here
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
  }
  const dogConfig = {
    key: 'dog',
    storage: AsyncStorage
  }
  const resettable = resettableReducer('LOG_OUT')
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = persistReducer(
    rootConfig,
    combineReducers({
    //   form: formReducer,
    // refactor reducers
      dog: persistReducer(dogConfig, resettable(dog))
    //   auth: persistReducer(authConfig, resettable(auth)),
    })
  )

  const store = configureStore(rootReducer, rootSaga)

  return store
}
