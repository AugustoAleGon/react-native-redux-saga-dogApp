/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  View
} from 'react-native'
import RootContainer from './RootContainer'
import DebugConfig from '../Config/DebugConfig'

type Props = {}
class App extends Component<Props> {
  render () {
    return (
      <View style={{
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 20 : 0
      }}>
        <RootContainer />
      </View>
    )
  }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
  ? console.tron.overlay(App)
  : App
