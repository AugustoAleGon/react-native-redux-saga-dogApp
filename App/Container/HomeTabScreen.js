import React, { Component } from 'react'
import {View} from 'react-native'
import {Text} from 'native-base'

// importing styles
import styles from './Styles/HomeTabScreenStyle'

class HomeTabScreen extends Component {
  render () {
    return (
      <View style={styles.homeTabMainContainer}>
        <Text style={styles.textTabMain}>
                  Hello! Nice to see you!
        </Text>
      </View>
    )
  }
}

export default HomeTabScreen
