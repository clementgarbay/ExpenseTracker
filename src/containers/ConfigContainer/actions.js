import { getSpreadsheetId, getFolderIdKey, setGoogleParams } from '../../services/storage'

export const TYPES = {
  UPDATE_GOOGLE_PARAMS: 'st/Config/UPDATE_GOOGLE_PARAMS'
}

const updateGoogleParamsAction = (spreadsheetId, folderId) => ({
  type: TYPES.UPDATE_GOOGLE_PARAMS,
  payload: {
    spreadsheetId,
    folderId
  }
})

export const initGoogleParams = (spreadsheetId, folderId) => {
  return async dispatch => {
    const spreadsheetId = await getSpreadsheetId()
    const folderId = await getFolderIdKey()

    dispatch(updateGoogleParamsAction(spreadsheetId, folderId))
  }
}

export const saveGoogleParams = (spreadsheetId, folderId) => {
  return dispatch => setGoogleParams(spreadsheetId, folderId)
    .then(() => dispatch(updateGoogleParamsAction(spreadsheetId, folderId)))
}
