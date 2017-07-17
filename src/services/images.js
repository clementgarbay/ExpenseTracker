import ImagePicker from 'react-native-image-picker'

const options = {
  title: 'Sélectionner un justificatif',
  mediaType: 'photo'
}

export const showImagePicker = () => {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.error) {
        reject(response.error)
      } else {
        resolve(response.data)
      }
    })
  })
}
