import React, { Component } from 'react'
import { ScrollView, Image } from 'react-native'

import styles from './styles'
import FormContainer from '../containers/FormContainer'
import invoiceIcon from './icons/invoice.png'

class FormScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Ajouter une dépense',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={invoiceIcon}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }

  render () {
    return (
      <ScrollView style={styles.container}>
        <FormContainer />
      </ScrollView>
    )
  }
}

export default FormScreen
