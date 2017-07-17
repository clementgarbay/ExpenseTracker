export const TYPES = {
  COMPUTE_AMOUNT_TO: 'st/AmountConverter/COMPUTE_AMOUNT_TO'
}

const computeAmountToAction = (amountFrom, exchangeRate) => ({
  type: TYPES.COMPUTE_AMOUNT_TO,
  payload: {
    amountFrom,
    exchangeRate
  }
})

export const computeAmountTo = (amountFrom, exchangeRate) => {
  return dispatch => dispatch(computeAmountToAction(amountFrom, exchangeRate))
}
