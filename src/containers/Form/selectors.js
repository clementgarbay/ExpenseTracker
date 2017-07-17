export const getType = (state) => state.formReducer.type
export const getRecipient = (state) => state.formReducer.recipient
export const getDescription = (state) => state.formReducer.description
export const getDate = (state) => state.formReducer.date
export const getProof = (state) => state.formReducer.proof
export const getIsPending = (state) => state.formReducer.status.isPending
export const getIsSucceed = (state) => state.formReducer.status.isSucceed
export const getError = (state) => state.formReducer.status.error
