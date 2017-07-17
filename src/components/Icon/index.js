import FontAwesome, { Icons } from 'react-native-fontawesome'
import PropTypes from 'prop-types'

const Icon = ({ icon }) => (
  <FontAwesome>{icon}</FontAwesome>
)

Icon.propTypes = {
  icon: PropTypes.instanceOf(Icons)
}

export default Icon
