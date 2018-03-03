import React, {Component} from 'react'
import { View } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation'

class RootContainer extends Component {
  render () {
    return (
      <View>
        <AppNavigation />
      </View>
    )
  }
}

export default RootContainer
