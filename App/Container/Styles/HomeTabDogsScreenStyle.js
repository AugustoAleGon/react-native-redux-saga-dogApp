import {StyleSheet} from 'react-native'
import {Colors} from '../../Themes'

export default StyleSheet.create({
  homeTabMyDogsContainer: {
    flex: 1
  },
  buttonContainerWrapper: {
    position: 'relative',
    top: 400,
    left: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
    width: 200,
    borderRadius: 15,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: Colors.secondaryColorLightPink
  }
})
