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
  } else if (response.status === 500) {
    throw Error('Une erreur est survenue')
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
  const formData = new FormData()
  formData.append('gg_spreadsheetId', googleConfig.spreadsheetId)
  formData.append('gg_folderId', googleConfig.folderId)
  formData.append('type', type)
  formData.append('recipient', recipient)
  formData.append('description', description)
  formData.append('amount', amount)
  formData.append('currency', currency)
  formData.append('date', date)
  formData.append('proof', {
    type: 'image/jpeg',
    name: 'proof.jpg',
    uri: proof
  })

  return fetch(`${apiConfig.endpoint}/expense`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data'
    },
    body: formData
  })
  .then(handleErrors)
}
