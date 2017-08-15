import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  ActivityIndicator,
  Alert,
  Button,
  TextInput,
  View
} from 'react-native'

import styles from './styles'

import currencyConfig from '../../../config/currency'
import FormGroup from '../../components/FormGroup'
import ImagePicker from '../../components/ImagePicker'
import ExpenseTypePicker from '../../components/ExpenseTypePicker'
import DatePicker from '../../components/DatePicker'
import AmountConverter from '../AmountConverter'
import { getAmountFrom } from '../AmountConverter/selectors'
import {
  updateType,
  updateRecipient,
  updateDescription,
  updateDate,
  addProof,
  removeProof,
  resetStatus,
  submit
} from './actions'
import {
  getType,
  getRecipient,
  getDescription,
  getDate,
  getProof,
  getIsPending,
  getIsSucceed,
  getError
} from './selectors'

class Form extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    recipient: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    proof: PropTypes.string,
    isPending: PropTypes.bool.isRequired,
    isSucceed: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    updateType: PropTypes.func.isRequired,
    updateRecipient: PropTypes.func.isRequired,
    updateDescription: PropTypes.func.isRequired,
    updateDate: PropTypes.func.isRequired,
    addProof: PropTypes.func.isRequired,
    removeProof: PropTypes.func.isRequired,
    resetStatus: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
  }

  static defaultProps = {
    proof: null
  }

  send = () => {
    this.props.submit(
      this.props.type,
      this.props.recipient,
      this.props.description,
      this.props.amount,
      currencyConfig.from,
      this.props.date,
      this.props.proof
    )
  }

  render () {
    if (this.props.error) {
      Alert.alert('Oops 🙁', this.props.error, [
        { text: 'OK', onPress: () => this.props.resetStatus() }
      ])
    } else if (this.props.isSucceed) {
      Alert.alert(null, '👍 Dépense ajoutée', [
        { text: 'OK', onPress: () => this.props.resetStatus() }
      ])
    }

    return (
      <View style={styles.container}>
        <FormGroup title='Poste de dépense'>
          <ExpenseTypePicker
            type={this.props.type}
            updateType={(type) => {
              this.props.updateType(type)
              this.refs.prestataire.focus()
            }}
          />
        </FormGroup>
        <FormGroup title='Prestataire'>
          <TextInput
            ref='prestataire'
            returnKeyType='next'
            placeholder='Fournisseur ou prestataire...'
            value={this.props.recipient}
            onChangeText={this.props.updateRecipient}
            onSubmitEditing={() => this.refs.description.focus()}
            style={styles.textInput}
          />
        </FormGroup>
        <FormGroup title='Description'>
          <TextInput
            ref='description'
            returnKeyType='next'
            placeholder='Description...'
            autoCorrect={false}
            value={this.props.description}
            onChangeText={this.props.updateDescription}
            onSubmitEditing={() => this.amountInput.focus()}
            style={styles.textInput}
          />
        </FormGroup>
        <AmountConverter
          inputRef={input => { this.amountInput = input }}
          currencyFrom={currencyConfig.from}
          currencyTo={currencyConfig.to}
          exchangeRate={currencyConfig.exchangeRate}
        />
        <FormGroup title='Date'>
          <DatePicker
            date={this.props.date}
            updateDate={this.props.updateDate}
          />
        </FormGroup>
        <FormGroup title='Justificatif'>
          <ImagePicker
            source={this.props.proof}
            onAddClick={this.props.addProof}
            onRemoveClick={this.props.removeProof}
          />
        </FormGroup>
        <FormGroup>
          {
            !this.props.isPending ? (
              <Button
                onPress={this.send}
                title='Ajouter la dépense'
                color='#4a8bfc'
              />
            ) : <ActivityIndicator />
          }
        </FormGroup>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  type: getType(state),
  recipient: getRecipient(state),
  description: getDescription(state),
  amount: getAmountFrom(state),
  date: getDate(state),
  proof: getProof(state),
  isPending: getIsPending(state),
  isSucceed: getIsSucceed(state),
  error: getError(state)
})

const mapDispatchToProps = {
  updateType,
  updateRecipient,
  updateDescription,
  updateDate,
  addProof,
  removeProof,
  resetStatus,
  submit
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)
