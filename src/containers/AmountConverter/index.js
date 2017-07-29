import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Text, TextInput } from 'react-native'

import styles from './styles'
import { computeAmountTo } from './actions'
import { getAmountFrom, getAmountTo } from './selectors'

import FormGroup from '../../components/FormGroup'

class AmountConverter extends Component {
  static propTypes = {
    currencyFrom: PropTypes.oneOf(['€', '£', '$']).isRequired,
    currencyTo: PropTypes.oneOf(['€', '£', '$']).isRequired,
    exchangeRate: PropTypes.number.isRequired,
    amountFrom: PropTypes.string.isRequired,
    amountTo: PropTypes.string,
    inputRef: PropTypes.func,
    computeAmountTo: PropTypes.func.isRequired
  }

  static defaultProps = {
    amountTo: null,
    inputRef: () => {}
  }

  render () {
    return (
      <FormGroup title={`Montant (en ${this.props.currencyFrom})`}>
        <TextInput
          ref={this.props.inputRef}
          value={this.props.amountFrom}
          placeholder='Montant...'
          keyboardType='decimal-pad'
          onChangeText={(amountFrom) => this.props.computeAmountTo(amountFrom, this.props.exchangeRate)}
          style={styles.textInput}
        />
        {
          this.props.amountTo && (
            <Text style={styles.textDetail}>
              → {this.props.amountTo} {this.props.currencyTo}
            </Text>
          )
        }
      </FormGroup>
    )
  }
}

const mapStateToProps = (state) => ({
  amountFrom: getAmountFrom(state),
  amountTo: getAmountTo(state)
})

const mapDispatchToProps = {
  computeAmountTo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AmountConverter)
