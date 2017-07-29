import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {
  Button,
  TextInput,
  View
} from 'react-native'

import styles from './styles'
import FormGroup from '../../components/FormGroup'
import { initGoogleParams, saveGoogleParams } from './actions'
import { getSpreadsheetId, getFolderId } from './selectors'

class Config extends Component {
  static propTypes = {
    spreadsheetId: PropTypes.string,
    folderId: PropTypes.string,
    initGoogleParams: PropTypes.func.isRequired,
    saveGoogleParams: PropTypes.func.isRequired
  }

  static defaultProps = {
    spreadsheetId: null,
    folderId: null
  }

  constructor (props) {
    super(props)

    this.state = {
      spreadsheetId: this.props.spreadsheetId,
      folderId: this.props.folderId
    }
  }

  componentWillMount () {
    this.props.initGoogleParams()
  }

  save = () => {
    // this.props.saveGoogleParams(this.state.spreadsheetId, this.state.folderId)
  }

  render () {
    return (
      <View>
        <FormGroup title='Google Spreadsheet Id'>
          <TextInput
            value={this.state.spreadsheetId}
            placeholder='E.g. 1EF8vjNNVnH8y49Ga_Mz9...'
            onChangeText={(spreadsheetId) => this.setState({ spreadsheetId })}
            style={styles.textInput}
          />
        </FormGroup>
        <FormGroup title='Google Folder Id'>
          <TextInput
            value={this.state.folderId}
            placeholder='E.g. 0B-d03I-h1yN...'
            onChangeText={(folderId) => this.setState({ folderId })}
            style={styles.textInput}
          />
        </FormGroup>
        <FormGroup>
          <Button
            onPress={this.save}
            title='Sauvegarder'
            color='#4a8bfc'
          />
        </FormGroup>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  spreadsheetId: getSpreadsheetId(state),
  folderId: getFolderId(state)
})

const mapDispatchToProps = {
  initGoogleParams,
  saveGoogleParams
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Config)
