import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './styles'

class Collapsible extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isCollapsed: true
    }
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

Collapsible.propTypes = {
  value: PropTypes.string,
  children: PropTypes.any.isRequired
}

Collapsible.defaultProps = {
  value: ''
}

export default Collapsible
