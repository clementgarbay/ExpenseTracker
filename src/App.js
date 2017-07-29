import React from 'react'
import { Provider } from 'react-redux'
import { TabNavigator } from 'react-navigation'

import store from './store'
import FormScreen from './screens/FormScreen'
import ConfigScreen from './screens/ConfigScreen'

const Router = TabNavigator({
  Form: { screen: FormScreen },
  Config: { screen: ConfigScreen }
}, {
  tabBarOptions: {
    showIcon: true,
    labelStyle: {
      fontSize: 12
    }
  }
})

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
