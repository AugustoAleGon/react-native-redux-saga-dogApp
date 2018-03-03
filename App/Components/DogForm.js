import React, {Component} from 'react'
import {View, TextInput} from 'react-native'

// Style from Container
import styles from './Styles/DogFormStyles'

// DogForm from Container

class DogForm extends Component {
  render () {
    const { ...custom } = this.props
    return (
      <View style={styles.textInputContainer}>
        <TextInput
          underlineColorAndroid='rgba(0,0,0,0)'
          style={styles.textInputStyle}
          {...custom} />
      </View>
    )
  }
}

export default DogForm
