import React from 'react'
import PropTypes from 'prop-types'
import { View, Button, Image } from 'react-native'

import styles from './styles'

const ImagePicker = (props) => (
  <View>
    {
      !props.source ? (
        <Button
          onPress={() => props.onAddClick()}
          title='Ajouter une photo'
          color='#333333'
        />
      ) : (
        <View>
          <Image
            style={styles.image}
            source={{
              uri: `data:image/jpeg;base64,${props.source}`
            }}
          />
          <Button
            onPress={() => props.onRemoveClick()}
            title='Supprimer la photo'
            color='#333333'
          />
        </View>
      )
    }
  </View>
)

ImagePicker.propTypes = {
  source: PropTypes.string,
  onAddClick: PropTypes.func,
  onRemoveClick: PropTypes.func
}

ImagePicker.defaultProps = {
  source: null,
  onAddClick: () => {},
  onRemoveClick: () => {}
}

export default ImagePicker
