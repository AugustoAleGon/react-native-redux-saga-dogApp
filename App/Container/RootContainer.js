import React, {Component} from 'react'
import {Root} from 'native-base'
import { connect } from 'react-redux'

// Importing Actions to dispatch
import StartupActions from '../Redux/StartupRedux'
import ReduxNavigation from '../Navigation/ReduxNavigation'

class RootContainer extends Component {
  componentDidMount () {
    this.props.startup()
  }
  render () {
    return (
      <Root>
        <ReduxNavigation />
      </Root>
    )
  }
}

// Methods to dispatch
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})
export default connect(null, mapDispatchToProps)(RootContainer)
