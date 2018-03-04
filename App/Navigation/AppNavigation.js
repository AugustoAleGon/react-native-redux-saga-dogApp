import {StackNavigator} from 'react-navigation'
import LoginScreen from '../Container/LoginScreen'
import HomeScreen from '../Container/HomeScreen'

const primaryScreens = StackNavigator({
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: HomeScreen
  }
}, {
  headerMode: 'none'
})

export default primaryScreens
