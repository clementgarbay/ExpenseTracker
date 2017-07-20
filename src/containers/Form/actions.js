import { addExpense } from '../../services/api'
import { showImagePicker } from '../../services/images'

export const TYPES = {
  UPDATE_TYPE: 'st/Form/UPDATE_TYPE',
  UPDATE_RECIPIENT: 'st/Form/UPDATE_RECIPIENT',
  UPDATE_DESCRIPTION: 'st/Form/UPDATE_DESCRIPTION',
  UPDATE_DATE: 'st/Form/UPDATE_DATE',
  UPDATE_PROOF: 'st/Form/UPDATE_PROOF',
  RESET_STATUS: 'st/Form/RESET_STATUS',
  SUBMIT: 'st/Form/SUBMIT',
  SUBMIT_PENDING: 'st/Form/SUBMIT_PENDING',
  SUBMIT_SUCCESS: 'st/Form/SUBMIT_SUCCESS',
  FAILURE: 'st/Form/FAILURE'
}

const updateTypeAction = (type) => ({
  type: TYPES.UPDATE_TYPE,
  payload: type
})

const updateRecipientAction = (recipient) => ({
  type: TYPES.UPDATE_RECIPIENT,
  payload: recipient
})

const updateDescriptionAction = (description) => ({
  type: TYPES.UPDATE_DESCRIPTION,
  payload: description
})

const updateDateAction = (date) => ({
  type: TYPES.UPDATE_DATE,
  payload: date
})

const updateProofAction = (proof) => ({
  type: TYPES.UPDATE_PROOF,
  payload: proof
})

const resetStatusAction = () => ({
  type: TYPES.RESET_STATUS
})

const submitPendingAction = () => ({
  type: TYPES.SUBMIT_PENDING
})

const submitSuccessAction = () => ({
  type: TYPES.SUBMIT_SUCCESS
})

const failureAction = (error) => ({
  type: TYPES.FAILURE,
  payload: error
})

export const updateType = (type) => {
  return dispatch => dispatch(updateTypeAction(type))
}

export const updateRecipient = (recipient) => {
  return dispatch => dispatch(updateRecipientAction(recipient))
}

export const updateDescription = (description) => {
  return dispatch => dispatch(updateDescriptionAction(description))
}

export const updateDate = (date) => {
  return dispatch => dispatch(updateDateAction(date))
}

export const addProof = () => {
  return dispatch => {
    showImagePicker()
      .then((res) => {
        if (!res.didCancel) dispatch(updateProofAction(res.uri))
      })
      .catch((error) => dispatch(failureAction(error)))
  }
}

export const removeProof = () => {
  return dispatch => dispatch(updateProofAction(null))
}

export const resetStatus = () => {
  return dispatch => dispatch(resetStatusAction())
}

export const submit = (type, recipient, description, amount, currency, date, proof) => {
  return async dispatch => {
    dispatch(submitPendingAction())

    try {
      await addExpense(type, recipient, description, amount, currency, date, proof)
      dispatch(submitSuccessAction())
    } catch (error) {
      dispatch(failureAction(error.message))
    }
  }
}
