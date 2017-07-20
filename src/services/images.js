import ImagePicker from 'react-native-image-picker'

export const showImagePicker = () => {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker({
      title: 'Sélectionner un justificatif',
      mediaType: 'photo',
      noData: true,
      quality: 0.8
    }, (response) => {
      if (response.error) {
        reject(response.error)
      } else {
        resolve(response)
      }
    })
  })
}
