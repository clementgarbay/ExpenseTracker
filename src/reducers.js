import { combineReducers } from 'redux'
import formReducer from './containers/FormContainer/reducer'
import configReducer from './containers/ConfigContainer/reducer'
import amountConverterReducer from './containers/AmountConverter/reducer'

export default combineReducers({
  formReducer,
  configReducer,
  amountConverterReducer
})
