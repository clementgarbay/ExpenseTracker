import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactNativeDatePicker from 'react-native-datepicker'

import styles from './styles'

class DatePicker extends Component {
  static propTypes = {
    date: PropTypes.instanceOf(Date).isRequired,
    updateDate: PropTypes.func.isRequired
  }

  render () {
    return (
      <ReactNativeDatePicker
        date={this.props.date}
        mode='date'
        placeholder='Date...'
        format='DD/MM/YYYY'
        confirmBtnText='Confirmer'
        cancelBtnText='Annuler'
        showIcon={false}
        customStyles={styles}
        onDateChange={this.props.updateDate}
      />
    )
  }
}

export default DatePicker
