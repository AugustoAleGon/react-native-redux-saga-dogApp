import React, {Component} from 'react'
import {Root} from 'native-base'
import AppNavigation from '../Navigation/AppNavigation'

class RootContainer extends Component {
  render () {
    return (
      <Root>
        <AppNavigation />
      </Root>
    )
  }
}

export default RootContainer
