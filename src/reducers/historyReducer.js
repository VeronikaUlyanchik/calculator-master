import { handleActions , createAction } from 'redux-actions'


const INITIAL_STATE = {
  history: [],
}

export const addToHistory = createAction(
  'ADD_TO_HISTORY',
  expression => expression,
)
export const clearHistory = createAction(
  'CLEAR_HISTORY',
)

export default handleActions({
  ADD_TO_HISTORY: (state, action) =>({
    history: [action.payload,...state.history],
  }),
  CLEAR_HISTORY: () =>({
    history: [],
  }),
}, INITIAL_STATE)
