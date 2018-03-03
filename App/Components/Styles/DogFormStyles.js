import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  textInputContainer: {
    height: 70,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
    borderRadius: 15
  },
  textInputStyle: {
    backgroundColor: Colors.primaryColorBlue,
    width: 200,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    ...Platform.select({
      ios: {
        height: 45
      }
    })
  }
})
