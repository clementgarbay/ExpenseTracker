import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, ScrollView, Text } from 'react-native'

import store from './store'
import Form from './containers/Form'

const App = () => (
  <Provider store={store}>
    <ScrollView style={styles.container}>
      <Text style={styles.title}>
        ExpenseTracker
      </Text>
      <Form />
    </ScrollView>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
    backgroundColor: '#fafafa'
  },
  title: {
    margin: 20,
    marginBottom: 40,
    textAlign: 'center',
    fontSize: 30
  }
})

export default App
