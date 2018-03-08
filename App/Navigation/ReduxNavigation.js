import React from 'react'
import { Platform, BackHandler } from 'react-native'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import AppNavigation from './AppNavigation'
// Fetching Redux Listener:
import {
  createReduxBoundAddListener
} from 'react-navigation-redux-helpers'

let isMainScreen = false

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const addListener = createReduxBoundAddListener('root')
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
    addListener
  })

  if (Platform.OS === 'android') {
    BackHandler.addEventListener('hardwareBackPress', () => {
      if (navigation.state.routes.length > 1) {
        navigation.goBack(null)
        return true
      } else {
        if (isMainScreen) {
          BackHandler.exitApp()
        } else {
          BackHandler.removeEventListener('hardwareBackPress')
          isMainScreen = true
        }
        return true
      }
    })
  }
  return <AppNavigation navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
export default connect(mapStateToProps)(ReduxNavigation)
