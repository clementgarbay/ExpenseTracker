import React from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from './styles'

const FormGroup = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>
      {props.title}
    </Text>
    <View>
      {props.children}
    </View>
  </View>
)

FormGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired
}

FormGroup.defaultProps = {
  title: ''
}

export default FormGroup
