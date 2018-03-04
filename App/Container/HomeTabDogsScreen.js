import React, {Component} from 'react'
import {
  View,
  TouchableOpacity,
  Image
} from 'react-native'

import {
  DeckSwiper,
  Text,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Icon
} from 'native-base'

// Style of the component
import styles from './Styles/HomeTabDogsScreenStyle'

// The purpose of this is the variable is to test the swiper
// Which is actually pretty cool right?
const testCards = [
  {
    breed: 'Pitbull',
    image: 'https://dog.ceo/api/img/pug/n02110958_16492.jpg'
  },
  {
    breed: 'Weimaraner',
    image: 'https://dog.ceo/api/img/weimaraner/n02092339_392.jpg'
  }
]

class HomeTabDogsScreen extends Component {
  render () {
    return (
      <View style={styles.homeTabMyDogsContainer}>
        <DeckSwiper
          ref={(c) => { this._deckSwiper = c }}
          dataSource={testCards}
          renderEmpty={
            <View style={{ justifyContent: 'center' }}>
              <Text>There is nothing here :(</Text>
            </View>
          }
          renderItem={item =>
            <Card style={{ elevation: 3 }}>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: item.image}} />
                  <Body>
                    <Text>{item.breed}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image style={{ height: 300, flex: 1 }} source={{uri: item.image}} />
              </CardItem>
            </Card>
          } />
        <View style={styles.buttonContainerWrapper}>
          <TouchableOpacity
            onPress={() => this._deckSwiper._root.swipeLeft()}
            style={styles.buttonWrapper}>
            <Text>Thats not my dog!</Text>
            <Icon name='arrow-forward' />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default HomeTabDogsScreen
