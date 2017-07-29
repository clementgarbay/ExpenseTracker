import { TYPES } from './actions'

const initialState = {
  spreadsheetId: null,
  folderId: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TYPES.UPDATE_GOOGLE_PARAMS:
      const { spreadsheetId, folderId } = action.payload

      return Object.assign({}, state, {
        spreadsheetId,
        folderId
      })

    default:
      return state
  }
}
