import React, {Component} from 'react'
import {
  Body,
  Tabs,
  Tab,
  Container,
  Header,
  Title } from 'native-base'

// Importing styles' component

import styles from './Styles/HomeScreenStyle'

// Tabs of the home screen
import HomeTabScreen from './HomeTabScreen'
import HomeTabDogsScreen from './HomeTabDogsScreen'

class HomeScreen extends Component {
  render () {
    return (
      <Container>
        <Header
          hasTabs
          style={styles.headerStyle}>
          <Body>
            <Title>
                Dog App
            </Title>
          </Body>
        </Header>
        <Tabs initialPage={0}>
          <Tab heading='Home'>
            <HomeTabScreen />
          </Tab>
          <Tab heading='My Dogs'>
            <HomeTabDogsScreen />
          </Tab>
        </Tabs>
      </Container>
    )
  }
}

export default HomeScreen
