import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  loginWrapper: {
    flex: 1,
    paddingTop: 20
  },
  textInputContainer: {
    height: 30,
    width: '100%',
    alignItems: 'center'
  },
  textInputStyle: {
    backgroundColor: Colors.primaryColorBlue,
    height: 30,
    width: 200,
    marginTop: 10
  },
  loginButtonWrapper: {
    alignItems: 'center',
    marginTop: 10
  },
  loginButton: {
    width: 150,
    height: 40,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: Colors.secondaryColorLightPink,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: 'white'
  }
})
