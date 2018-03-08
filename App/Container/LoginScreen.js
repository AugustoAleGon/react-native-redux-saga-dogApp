import React, {Component} from 'react'
import {
  Alert,
  View,
  TouchableOpacity,
  Text} from 'react-native'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import { reduxForm, reset } from 'redux-form'

import authAction from '../Redux/Reducers/auth'
// Internal Components:
import DogForm from '../Components/DogForm'
import {validateUser} from '../Lib/Utils'
// Importing styles: :)
import styles from './Styles/LoginScreenStyle'
// import HomeScreen from './HomeScreen'

class LoginScreen extends Component {
  componentWillMount () {
    reset('loginForm')
  }

  componentWillReceiveProps (nextProps) {
    console.log('This is my next props: ', nextProps)
    if(nextProps.userLogged){
      this.props.navigation.navigate('Home')
    }
  }
  render () {
    const { handleSubmit } = this.props
    return (
      <View style={styles.loginWrapper}>
        <DogForm
          name='username'
          autoCorrect={false}
          placeholderTextColor={'black'}
          placeholder='Username' />
        <DogForm
          errorMessage='Invalid credentials'
          name='password'
          autoCorrect={false}
          autoCapitalize='none'
          secureTextEntry
          placeholderTextColor={'black'}
          placeholder='Password' />
        <View style={styles.loginButtonWrapper}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleSubmit((props) => {
              if (validateUser(props.username.toLowerCase(), props.password)) {
                this.props.loginAction()
              } else {
                Alert.alert(
                  'Dog App',
                  'Credentials are not valid. Please try again.',
                  [
                    {text: 'OK', onPress: () => { reset('loginForm') }}
                  ]
                )
              }
            })
            }
          >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {userLogged: state.auth.logged}
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginAction: bindActionCreators(authAction.login, dispatch)
  }
}

const LoginScreenConnect = connect(mapStateToProps, mapDispatchToProps)(LoginScreen)

export default reduxForm({
  form: 'loginForm',
  enableReinitialize: true,
  validate: (values) => {
    const errors = {}
    if (!values.username) {
      errors.username = 'Email is required'
    }

    if (!values.password) {
      errors.password = 'Password is required'
    }
    return errors
  }
})(LoginScreenConnect)
