import AppNavigation from '../Navigation/AppNavigation'

export const reducer = (state, action) => {
  if (action.type.startsWith('Navigation/')) {
    const {routeName} = action
    const lastRoute = state.routes[state.routes.length - 1]
    if (routeName === lastRoute.routeName) return state
  }
  const newState = AppNavigation.router.getStateForAction(action, state)
  return newState || state
}
