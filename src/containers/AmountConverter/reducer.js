import { TYPES } from './actions'
import { TYPES as FormActionsTypes } from '../Form/actions'

// Amounts are stored as string
// TODO: use number instead of string
const initialState = {
  amountFrom: '',
  amountTo: null // computed value
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.COMPUTE_AMOUNT_TO:
      const { amountFrom, exchangeRate } = action.payload
      const amountTo = amountFrom ? (parseFloat(amountFrom) * exchangeRate).toFixed(2) : null

      return Object.assign({}, state, {
        amountFrom,
        amountTo
      })

    case FormActionsTypes.SUBMIT_SUCCESS:
      return initialState

    default:
      return state
  }
}
