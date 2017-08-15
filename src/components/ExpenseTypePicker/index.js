import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Picker, Platform } from 'react-native'

import Collapsible from '../../components/Collapsible'
import { TYPES as expenseTypes, valueOfKey } from '../../models/expense'

class ExpenseTypePicker extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    updateType: PropTypes.func.isRequired
  }

  updateType = (type) => {
    this.props.updateType(type)
    if (this.collapsible) this.collapsible.collapse()
  }

  render () {
    const isAndroid = Platform.OS === 'android'
    const picker = (
      <Picker
        selectedValue={this.props.type}
        onValueChange={(itemValue, itemIndex) => this.updateType(itemValue)}
      >
        <Picker.Item label={expenseTypes.TRANSPORT.label} value={expenseTypes.TRANSPORT.key} />
        <Picker.Item label={expenseTypes.ACCOMMODATION.label} value={expenseTypes.ACCOMMODATION.key} />
        <Picker.Item label={expenseTypes.EATING.label} value={expenseTypes.EATING.key} />
        <Picker.Item label={expenseTypes.OTHER.label} value={expenseTypes.OTHER.key} />
      </Picker>
    )

    return !isAndroid ? (
      <Collapsible
        ref={(elem) => { this.collapsible = elem }}
        value={valueOfKey(this.props.type)}
      >
        {picker}
      </Collapsible>
    ) : picker
  }
}

export default ExpenseTypePicker
