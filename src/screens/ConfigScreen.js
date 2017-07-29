import React, { Component } from 'react'
import { View, Image } from 'react-native'

import styles from './styles'
import ConfigContainer from '../containers/ConfigContainer'
import cogIcon from './icons/cog.png'

class ConfigScreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'Configuration',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={cogIcon}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    )
  }

  render () {
    return (
      <View style={styles.container}>
        <ConfigContainer />
      </View>
    )
  }
}

export default ConfigScreen
