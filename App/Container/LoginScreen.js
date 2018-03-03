import React, {Component} from 'react'
import {View, TouchableOpacity, Text} from 'react-native'

// Internal Components:
import DogForm from '../Components/DogForm'

// Importing styles: :)
import styles from './Styles/LoginScreenStyle'
// import HomeScreen from './HomeScreen'

class LoginScreen extends Component {
  render () {
    console.log('This are my props! :', this)
    return (
      <View style={styles.loginWrapper}>
        <DogForm
          placeholder='Username' />
        <DogForm
          placeholder='Password' />
        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              this.props.navigation.navigate('Home')
            }}
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default LoginScreen
