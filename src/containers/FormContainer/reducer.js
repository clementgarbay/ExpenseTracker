import { TYPES } from './actions'
import { TYPES as expenseTypes } from '../../models/expense'

const initialState = {
  type: expenseTypes.OTHER.key,
  recipient: '',
  description: '',
  date: new Date(),
  proof: null,
  status: {
    isPending: false,
    isSucceed: false,
    error: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.UPDATE_TYPE:
      return Object.assign({}, state, {
        type: action.payload
      })

    case TYPES.UPDATE_RECIPIENT:
      return Object.assign({}, state, {
        recipient: action.payload
      })

    case TYPES.UPDATE_DESCRIPTION:
      return Object.assign({}, state, {
        description: action.payload
      })

    case TYPES.UPDATE_DATE:
      return Object.assign({}, state, {
        date: action.payload
      })

    case TYPES.UPDATE_PROOF:
      return Object.assign({}, state, {
        proof: action.payload
      })

    case TYPES.RESET_STATUS:
      return Object.assign({}, state, {
        status: initialState.status
      })

    case TYPES.SUBMIT_PENDING:
      return Object.assign({}, state, {
        status: {
          isPending: true,
          isSucceed: false,
          error: ''
        }
      })

    case TYPES.SUBMIT_SUCCESS:
      return Object.assign({}, initialState, {
        status: {
          isPending: false,
          isSucceed: true,
          error: ''
        }
      })

    case TYPES.FAILURE:
      return Object.assign({}, state, {
        status: {
          isPending: false,
          isSucceed: false,
          error: action.payload
        }
      })

    default:
      return state
  }
}
