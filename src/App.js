import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, ScrollView } from 'react-native'

import store from './store'
import Form from './containers/Form'

const App = () => (
  <Provider store={store}>
    <ScrollView style={styles.container}>
      <Form />
    </ScrollView>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 40,
    marginTop: 20
  }
})

export default App
