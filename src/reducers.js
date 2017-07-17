import { combineReducers } from 'redux'
import formReducer from './containers/Form/reducer'
import amountConverterReducer from './containers/AmountConverter/reducer'

export default combineReducers({
  formReducer,
  amountConverterReducer
})
