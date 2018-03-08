import React, {Component} from 'react'
import {View, TextInput, Text} from 'react-native'
import {Field} from 'redux-form'
// Style from Container
import styles from './Styles/DogFormStyles'

// DogForm from Container

const renderFormInput = ({input, label, meta: {touched, error}, errorMessage, placeholder, ...custom}) => {
  return (
    <View style={styles.textInputContainer}>
      <TextInput
        underlineColorAndroid='rgba(0,0,0,0)'
        style={styles.textInputStyle}
        onChangeText={(value) => input.onChange(value)}
        value={input.value}
        shake={error}
        {...custom} />
      { touched && error && <Text>Something went wrong!</Text>}
    </View>
  )
}
export default class DogForm extends Component {
  render () {
    const { ...attributes } = this.props
    return (
      <Field
        component={renderFormInput}
        {...attributes} />
    )
  }
}
