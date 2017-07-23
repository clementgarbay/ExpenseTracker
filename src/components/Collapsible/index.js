import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './styles'

export default class Collapsible extends Component {
  static propTypes = {
    value: PropTypes.string,
    children: PropTypes.any.isRequired
  }

  static defaultProps = {
    value: ''
  }

  state = {
    isCollapsed: true
  }

  render () {
    return (
      <View>
        <Text
          style={styles.textInput}
          onPress={() => this.setState({ isCollapsed: !this.state.isCollapsed })}
        >
          {this.props.value}
        </Text>
        {
          !this.state.isCollapsed && (
            <View >
              {this.props.children}
            </View>
          )
        }
      </View>
    )
  }
}
