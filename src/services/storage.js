import { AsyncStorage } from 'react-native'

const SPREADSHEET_ID_KEY = 'spreadsheetId'
const FOLDER_ID_KEY = 'folderId'

export const getSpreadsheetId = async () => {
  await AsyncStorage.getItem(SPREADSHEET_ID_KEY)
}

export const getFolderIdKey = async () => {
  await AsyncStorage.getItem(FOLDER_ID_KEY)
}

export const setGoogleParams = async (spreadsheetId, folderId) => {
  if (spreadsheetId) {
    await AsyncStorage.setItem(SPREADSHEET_ID_KEY, spreadsheetId)
  }
  if (folderId) {
    await AsyncStorage.setItem(FOLDER_ID_KEY, folderId)
  }
}
