import apiConfig from '../../config/api'
import googleConfig from '../../config/google'

function handleErrors (response) {
  if (response.status >= 200 && response.status < 300) {
    return response // .json()
  } else if (response.status === 400) {
    throw Error('Le formulaire est incomplet')
    // return response.json().then(err => {
    //   console.log('err', err)
    //   throw err
    // })
  } else if (!response.ok) {
    throw Error(response.statusText)
  }
}

export function addExpense (
  type,
  recipient,
  description,
  amount,
  currency,
  date,
  proof
) {
  const body = JSON.stringify({
    gg_spreadsheetId: googleConfig.spreadsheetId,
    gg_folderId: googleConfig.folderId,
    type,
    recipient,
    description,
    amount,
    currency,
    date,
    proof
  })

  return fetch(`${apiConfig.endpoint}/expense`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body
  })
  .then(handleErrors)
}
